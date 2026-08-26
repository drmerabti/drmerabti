// ============================================================
// script.js — Invoice Generator application logic
// ============================================================

(function () {
  "use strict";

  let itemIdCounter = 0;
  function nextItemId() { return "item-" + (++itemIdCounter); }

  const state = {
    logoDataUrl: null,
    signatureDataUrl: null,
    date: todayISO(),
    invoiceNumber: "010003",
    customer: "",
    items: [
      { id: nextItemId(), article: "", qty: 1, price: 0 },
    ],
    tvaPercent: 19,
    wordsGenerated: "",
    wordsIsStale: true,
  };

  function todayISO() {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${mm}-${dd}`;
  }

  function formatDateDisplay(iso) {
    if (!iso) return "—";
    const [y, m, d] = iso.split("-");
    if (!y || !m || !d) return iso;
    return `${d}/${m}/${y}`;
  }

  function formatMoney(n) {
    const num = isFinite(n) ? n : 0;
    return "$" + num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function clampNonNegative(n) {
    const v = parseFloat(n);
    if (isNaN(v) || v < 0) return 0;
    return v;
  }

  /* ---------------- Calculations ---------------- */

  function calcTotals() {
    let ht = 0;
    state.items.forEach((it) => {
      const qty = clampNonNegative(it.qty);
      const price = clampNonNegative(it.price);
      ht += qty * price;
    });
    const tvaPct = clampNonNegative(state.tvaPercent);
    const tvaAmount = ht * (tvaPct / 100);
    const ttc = ht + tvaAmount;
    return { ht, tvaAmount, ttc, tvaPct };
  }

  /* ---------------- DOM refs ---------------- */

  const $ = (sel) => document.querySelector(sel);
  const els = {
    htmlRoot: $("#htmlRoot"),
    langBtns: document.querySelectorAll(".lang-btn"),

    logoInput: $("#logoInput"),
    logoUploadBox: $("#logoUploadBox"),
    logoPlaceholder: $("#logoPlaceholder"),
    logoPreview: $("#logoPreview"),

    invoiceDate: $("#invoiceDate"),
    invoiceNumber: $("#invoiceNumber"),
    customerName: $("#customerName"),

    itemsTbody: $("#itemsTbody"),
    addArticleBtn: $("#addArticleBtn"),

    htValue: $("#htValue"),
    tvaPercent: $("#tvaPercent"),
    tvaValue: $("#tvaValue"),
    ttcValue: $("#ttcValue"),

    amountWordsBox: $("#amountWordsBox"),
    generateWordsBtn: $("#generateWordsBtn"),

    signatureInput: $("#signatureInput"),
    signatureUploadBox: $("#signatureUploadBox"),
    signaturePlaceholder: $("#signaturePlaceholder"),
    signaturePreview: $("#signaturePreview"),

    generatePdfBtn: $("#generatePdfBtn"),
    printBtn: $("#printBtn"),
    clearBtn: $("#clearBtn"),

    previewLogo: $("#previewLogo"),
    previewLogoPlaceholder: $("#previewLogoPlaceholder"),
    previewInvoiceNumber: $("#previewInvoiceNumber"),
    previewDate: $("#previewDate"),
    previewCustomer: $("#previewCustomer"),
    previewItemsBody: $("#previewItemsBody"),
    previewHt: $("#previewHt"),
    previewTvaLabel: $("#previewTvaLabel"),
    previewTva: $("#previewTva"),
    previewTtc: $("#previewTtc"),
    previewWords: $("#previewWords"),
    previewSignature: $("#previewSignature"),

    confirmOverlay: $("#confirmOverlay"),
    confirmCancel: $("#confirmCancel"),
    confirmOk: $("#confirmOk"),
  };

  /* ---------------- i18n application ---------------- */

  function applyLanguage(lang) {
    currentLang = lang;
    const dict = I18N[lang];
    els.htmlRoot.setAttribute("lang", lang);
    els.htmlRoot.setAttribute("dir", dict.dir);

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (dict[key] !== undefined) node.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const key = node.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) node.setAttribute("placeholder", dict[key]);
    });

    els.langBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    // amount-in-words placeholder state
    if (state.wordsIsStale) {
      els.amountWordsBox.textContent = t("clickGenerate");
      els.amountWordsBox.classList.add("is-placeholder");
    }

    renderItemsForm();
    renderPreview();
  }

  els.langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      state.wordsIsStale = true; // amount words depend on language; force regeneration
      applyLanguage(lang);
    });
  });

  /* ---------------- Uploads ---------------- */

  function bindUpload(box, input, placeholder, previewImg, onLoaded) {
    box.addEventListener("click", () => input.click());
    box.addEventListener("dragover", (e) => { e.preventDefault(); box.style.borderColor = "var(--blue)"; });
    box.addEventListener("dragleave", () => { box.style.borderColor = ""; });
    box.addEventListener("drop", (e) => {
      e.preventDefault();
      box.style.borderColor = "";
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files[0]);
      }
    });
    input.addEventListener("change", () => {
      if (input.files && input.files[0]) handleFile(input.files[0]);
    });

    function handleFile(file) {
      const valid = /\.(png|jpe?g|svg)$/i.test(file.name) || /^image\//.test(file.type);
      if (!valid) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result;
        placeholder.hidden = true;
        previewImg.hidden = false;
        previewImg.src = dataUrl;
        onLoaded(dataUrl);
        renderPreview();
      };
      reader.readAsDataURL(file);
    }
  }

  bindUpload(els.logoUploadBox, els.logoInput, els.logoPlaceholder, els.logoPreview, (url) => {
    state.logoDataUrl = url;
  });

  bindUpload(els.signatureUploadBox, els.signatureInput, els.signaturePlaceholder, els.signaturePreview, (url) => {
    state.signatureDataUrl = url;
  });

  /* ---------------- Basic fields ---------------- */

  els.invoiceDate.addEventListener("input", () => {
    state.date = els.invoiceDate.value;
    renderPreview();
  });

  els.invoiceNumber.addEventListener("input", () => {
    state.invoiceNumber = els.invoiceNumber.value;
    renderPreview();
  });

  els.customerName.addEventListener("input", () => {
    state.customer = els.customerName.value;
    renderPreview();
  });

  els.tvaPercent.addEventListener("input", () => {
    state.tvaPercent = els.tvaPercent.value;
    state.wordsIsStale = true;
    renderTotals();
    renderPreview();
  });

  /* ---------------- Items table ---------------- */

  function renderItemsForm() {
    els.itemsTbody.innerHTML = "";
    state.items.forEach((item) => {
      const tr = document.createElement("tr");
      tr.dataset.id = item.id;
      tr.innerHTML = `
        <td><input type="text" class="input article-input" data-field="article" value="${escapeAttr(item.article)}" placeholder="${t("article")}"></td>
        <td><input type="number" class="input qty-input" data-field="qty" min="0" step="1" value="${item.qty}"></td>
        <td><input type="number" class="input price-input" data-field="price" min="0" step="0.01" value="${item.price}"></td>
        <td class="total-cell">${formatMoney(clampNonNegative(item.qty) * clampNonNegative(item.price))}</td>
        <td class="td-action">
          <button type="button" class="delete-row-btn" aria-label="Delete row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
          </button>
        </td>
      `;
      els.itemsTbody.appendChild(tr);
    });
  }

  function escapeAttr(str) {
    return String(str == null ? "" : str).replace(/"/g, "&quot;");
  }

  els.itemsTbody.addEventListener("input", (e) => {
    const field = e.target.getAttribute("data-field");
    if (!field) return;
    const tr = e.target.closest("tr");
    const id = tr.dataset.id;
    const item = state.items.find((it) => it.id === id);
    if (!item) return;

    if (field === "article") {
      item.article = e.target.value;
    } else if (field === "qty") {
      item.qty = e.target.value === "" ? "" : clampNonNegative(e.target.value);
    } else if (field === "price") {
      item.price = e.target.value === "" ? "" : clampNonNegative(e.target.value);
    }

    const totalCell = tr.querySelector(".total-cell");
    totalCell.textContent = formatMoney(clampNonNegative(item.qty) * clampNonNegative(item.price));

    state.wordsIsStale = true;
    renderTotals();
    renderPreview();
  });

  els.itemsTbody.addEventListener("click", (e) => {
    const btn = e.target.closest(".delete-row-btn");
    if (!btn) return;
    const tr = btn.closest("tr");
    const id = tr.dataset.id;
    state.items = state.items.filter((it) => it.id !== id);
    if (state.items.length === 0) {
      state.items.push({ id: nextItemId(), article: "", qty: 1, price: 0 });
    }
    state.wordsIsStale = true;
    renderItemsForm();
    renderTotals();
    renderPreview();
  });

  els.addArticleBtn.addEventListener("click", () => {
    state.items.push({ id: nextItemId(), article: "", qty: 1, price: 0 });
    state.wordsIsStale = true;
    renderItemsForm();
    renderTotals();
    renderPreview();
  });

  /* ---------------- Totals rendering ---------------- */

  function renderTotals() {
    const { ht, tvaAmount, ttc, tvaPct } = calcTotals();
    els.htValue.textContent = formatMoney(ht);
    els.tvaValue.textContent = formatMoney(tvaAmount);
    els.ttcValue.textContent = formatMoney(ttc);
  }

  /* ---------------- Amount in words ---------------- */

  els.generateWordsBtn.addEventListener("click", () => {
    const { ttc } = calcTotals();
    state.wordsGenerated = amountToWords(ttc, currentLang);
    state.wordsIsStale = false;
    els.amountWordsBox.textContent = state.wordsGenerated;
    els.amountWordsBox.classList.remove("is-placeholder");
    renderPreview();
  });

  /* ---------------- Preview rendering ---------------- */

  function renderPreview() {
    // Logo
    if (state.logoDataUrl) {
      els.previewLogo.src = state.logoDataUrl;
      els.previewLogo.hidden = false;
      els.previewLogoPlaceholder.hidden = true;
    } else {
      els.previewLogo.hidden = true;
      els.previewLogoPlaceholder.hidden = false;
    }

    // Meta
    els.previewInvoiceNumber.textContent = state.invoiceNumber || "—";
    els.previewDate.textContent = formatDateDisplay(state.date);
    els.previewCustomer.textContent = state.customer || "—";

    // Items
    els.previewItemsBody.innerHTML = "";
    const validItems = state.items.filter((it) => it.article || clampNonNegative(it.qty) > 0 || clampNonNegative(it.price) > 0);
    if (validItems.length === 0) {
      const tr = document.createElement("tr");
      tr.className = "inv-empty-row";
      tr.innerHTML = `<td colspan="4">—</td>`;
      els.previewItemsBody.appendChild(tr);
    } else {
      state.items.forEach((item) => {
        if (!item.article && clampNonNegative(item.qty) === 0 && clampNonNegative(item.price) === 0) return;
        const qty = clampNonNegative(item.qty);
        const price = clampNonNegative(item.price);
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${escapeHtml(item.article) || "—"}</td>
          <td>${qty}</td>
          <td>${formatMoney(price)}</td>
          <td>${formatMoney(qty * price)}</td>
        `;
        els.previewItemsBody.appendChild(tr);
      });
    }

    // Totals
    const { ht, tvaAmount, ttc, tvaPct } = calcTotals();
    els.previewHt.textContent = formatMoney(ht);
    els.previewTvaLabel.textContent = `${t("tva")} (${tvaPct}%)`;
    els.previewTva.textContent = formatMoney(tvaAmount);
    els.previewTtc.textContent = formatMoney(ttc);

    // Words
    els.previewWords.textContent = state.wordsIsStale ? "—" : state.wordsGenerated;

    // Signature
    if (state.signatureDataUrl) {
      els.previewSignature.src = state.signatureDataUrl;
      els.previewSignature.hidden = false;
    } else {
      els.previewSignature.hidden = true;
    }
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str == null ? "" : str;
    return div.innerHTML;
  }

  /* ---------------- Actions: Print / PDF / Clear ---------------- */

  els.printBtn.addEventListener("click", () => {
    window.print();
  });

  els.generatePdfBtn.addEventListener("click", async () => {
    const original = els.generatePdfBtn.textContent;
    els.generatePdfBtn.textContent = "…";
    els.generatePdfBtn.disabled = true;
    try {
      const sheet = document.getElementById("invoiceSheet");
      const canvas = await html2canvas(sheet, { scale: 2, backgroundColor: "#ffffff", useCORS: true });
      const imgData = canvas.toDataURL("image/png");

      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      const filename = `invoice-${state.invoiceNumber || "draft"}.pdf`;
      pdf.save(filename);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("PDF generation failed. Please try the Print option instead.");
    } finally {
      els.generatePdfBtn.textContent = original;
      els.generatePdfBtn.disabled = false;
    }
  });

  els.clearBtn.addEventListener("click", () => {
    els.confirmOverlay.hidden = false;
  });

  els.confirmCancel.addEventListener("click", () => {
    els.confirmOverlay.hidden = true;
  });

  els.confirmOk.addEventListener("click", () => {
    els.confirmOverlay.hidden = true;
    resetState();
  });

  function resetState() {
    state.logoDataUrl = null;
    state.signatureDataUrl = null;
    state.date = todayISO();
    state.invoiceNumber = "";
    state.customer = "";
    state.items = [{ id: nextItemId(), article: "", qty: 1, price: 0 }];
    state.tvaPercent = 19;
    state.wordsGenerated = "";
    state.wordsIsStale = true;

    els.logoPreview.hidden = true;
    els.logoPreview.removeAttribute("src");
    els.logoPlaceholder.hidden = false;
    els.logoInput.value = "";

    els.signaturePreview.hidden = true;
    els.signaturePreview.removeAttribute("src");
    els.signaturePlaceholder.hidden = false;
    els.signatureInput.value = "";

    els.invoiceDate.value = state.date;
    els.invoiceNumber.value = "";
    els.customerName.value = "";
    els.tvaPercent.value = 19;

    els.amountWordsBox.textContent = t("clickGenerate");
    els.amountWordsBox.classList.add("is-placeholder");

    renderItemsForm();
    renderTotals();
    renderPreview();
  }

  /* ---------------- Init ---------------- */

  function init() {
    els.invoiceDate.value = state.date;
    els.invoiceNumber.value = state.invoiceNumber;
    els.tvaPercent.value = state.tvaPercent;

    applyLanguage("en");
    renderItemsForm();
    renderTotals();
    renderPreview();
  }

  init();
})();
