// FAQ Toggle
function toggleFAQ(element) {
    const item = element.parentElement;
    item.classList.toggle('open');
}

// ===== INQUIRY FORM (advanced validation + submit) =====
(function() {
    'use strict';
    const qfForm = document.getElementById('quoteForm');
    if (!qfForm) return;

    const qfBtn = document.getElementById('qf-submit-btn');
    const qfBtnText = document.getElementById('qf-submit-text');
    const qfBanner = document.getElementById('qfBanner');
    const qfSummary = document.getElementById('qf-summary');
    const qfSummaryContent = document.getElementById('qf-summary-content');

    const validators = {
name: function(v) {
    if (!v || v.trim().length < 2) return { ok: false, msg: '⚠ Please enter your name (min 2 characters)' };
    return { ok: true, msg: '✓ Looks good' };
},
email: function(v) {
    if (!v) return { ok: false, msg: '⚠ Please enter your email' };
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!re.test(v)) return { ok: false, msg: '⚠ Please enter a valid email address' };
    return { ok: true, msg: '✓ Valid email' };
},
phone: function(v) {
    if (!v) return { ok: false, msg: '⚠ Please enter your phone number' };
    const sel = document.getElementById('qf-phone-country');
    const pat = sel.options[sel.selectedIndex].dataset.pattern;
    const re = new RegExp(pat);
    if (!re.test(v.replace(/[\s-]/g, ''))) return { ok: false, msg: '⚠ Please enter a valid phone number for the selected country' };
    return { ok: true, msg: '✓ Valid number' };
},
agree: function(v) {
    if (!v) return { ok: false, msg: '⚠ Please confirm this is a genuine inquiry' };
    return { ok: true, msg: '' };
}
    };

    function showMsg(id, result) {
const msgEl = document.getElementById(id + '-msg');
const inputEl = document.getElementById(id);
if (!msgEl) return;
if (result.ok === true) {
    msgEl.textContent = result.msg; msgEl.className = 'qf-msg show ok';
    if (inputEl) { inputEl.classList.remove('err'); inputEl.classList.add('ok'); }
} else if (result.ok === false) {
    msgEl.textContent = result.msg; msgEl.className = 'qf-msg show err';
    if (inputEl) { inputEl.classList.remove('ok'); inputEl.classList.add('err'); }
} else { msgEl.textContent = ''; msgEl.className = 'qf-msg'; if (inputEl) inputEl.classList.remove('err', 'ok'); }
    }

    function validateAll() {
let allOk = true;
const checks = [
    { id: 'qf-name', val: document.getElementById('qf-name').value, fn: validators.name },
    { id: 'qf-email', val: document.getElementById('qf-email').value, fn: validators.email },
    { id: 'qf-phone', val: document.getElementById('qf-phone').value, fn: validators.phone },
    { id: 'qf-agree', val: document.getElementById('qf-agree').checked, fn: validators.agree }
];
checks.forEach(function(c) {
    const r = c.fn(c.val);
    const baseId = c.id.replace('qf-', '');
    showMsg(c.id, r);
    if (!r.ok) allOk = false;
});
return allOk;
    }

    // Real-time validation
    ['qf-name','qf-email','qf-phone'].forEach(function(id) {
const el = document.getElementById(id);
const baseId = id.replace('qf-', '');
el.addEventListener('blur', function() { showMsg(id, validators[baseId](el.value)); });
el.addEventListener('input', function() { if (el.classList.contains('err')) showMsg(id, validators[baseId](el.value)); });
    });
    document.getElementById('qf-phone-country').addEventListener('change', function() {
const phoneEl = document.getElementById('qf-phone');
if (phoneEl.value) showMsg('qf-phone', validators.phone(phoneEl.value));
    });
    document.getElementById('qf-agree').addEventListener('change', function() {
const r = validators.agree(this.checked);
const msgEl = document.getElementById('qf-agree-msg');
if (r.ok) { msgEl.className = 'qf-msg'; } else { msgEl.textContent = r.msg; msgEl.className = 'qf-msg show err'; }
    });

    function showBanner(type, msg) {
qfBanner.className = 'qf-banner show ' + type;
qfBanner.innerHTML = msg;
qfBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function escapeHtml(str) { const d = document.createElement('div'); d.textContent = String(str); return d.innerHTML; }

    function buildSummary(d) {
const rows = [
    ['Name', d.name], ['Email', d.email], ['Phone', d.phoneCountry + ' ' + d.phone],
    ['Company', d.company || '—'], ['Country', d.country || '—'],
    ['Product', d.product || '—'], ['Message', d.message || '—']
];
qfSummaryContent.innerHTML = rows.map(function(r) {
    return '<div class="qf-summary-row"><div class="qf-summary-label">' + r[0] + '</div><div class="qf-summary-val">' + escapeHtml(r[1]) + '</div></div>';
}).join('');
qfSummary.classList.add('show');
    }

    qfForm.addEventListener('submit', function(e) {
e.preventDefault();
// Honeypot
const hp = qfForm.querySelector('input[name="company_website"]');
if (hp && hp.value) {
    showBanner('success', '✓ Thank you! Your inquiry has been submitted. Our team will contact you soon.');
    qfForm.style.display = 'none';
    return;
}
if (!validateAll()) {
    showBanner('error', '⚠ Please complete all required fields highlighted below.');
    const firstErr = qfForm.querySelector('.err');
    if (firstErr) firstErr.focus();
    return;
}
const data = {
    name: document.getElementById('qf-name').value.trim(),
    email: document.getElementById('qf-email').value.trim(),
    phoneCountry: document.getElementById('qf-phone-country').value,
    phone: document.getElementById('qf-phone').value.trim(),
    company: document.getElementById('qf-company').value.trim(),
    country: document.getElementById('qf-country').value,
    product: document.getElementById('qf-product').value,
    message: document.getElementById('qf-message').value.trim()
};
qfBtn.classList.add('loading');
qfBtn.disabled = true;
qfBtnText.innerHTML = '<span class="spinner-sm"></span> Submitting...';
setTimeout(function() {
    qfBtn.classList.remove('loading'); qfBtn.disabled = false; qfBtnText.textContent = 'Submit Inquiry';
    const success = Math.random() > 0.05;
    if (success) {
        showBanner('success', '✓ Thank you! Your inquiry has been submitted. Our sales team will contact you within 24 hours.');
        qfForm.style.display = 'none';
        buildSummary(data);
    } else {
        showBanner('error', '⚠ Submission failed due to a network error. Please try again or WhatsApp: +86 18925044116');
    }
}, 1800);
    });
})();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
const href = this.getAttribute('href');
if (href === '#') return;
const target = document.querySelector(href);
if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
    });
});

// Mobile nav toggle
function toggleMobileNav() {
    alert('Mobile menu — will be implemented in the full Next.js version.');
}

// ===== MEGA MENU — hover open + hover close =====
const navItems = document.querySelectorAll('.nav-item');
const megaOverlay = document.querySelector('.mega-overlay');
let megaCloseTimer = null;

function closeAllMega() {
    navItems.forEach(function(ni) { ni.classList.remove('active'); });
    if (megaOverlay) megaOverlay.classList.remove('show');
}
function openMega(item) {
    clearTimeout(megaCloseTimer);
    navItems.forEach(function(ni) { ni.classList.remove('active'); });
    item.classList.add('active');
    if (megaOverlay) megaOverlay.classList.add('show');
}

navItems.forEach(function(item) {
    const trigger = item.querySelector('a');
    const panel = item.querySelector('.mega-panel');
    if (!panel) return; // skip items without mega menu

    // Click: desktop follows the link (navigates to /products/ etc.);
    // mobile / touch keeps the expand-toggle behaviour
    trigger.addEventListener('click', function(e) {
if (!window.matchMedia('(max-width: 1024px), (hover: none)').matches) return;
e.preventDefault();
e.stopPropagation();
const isActive = item.classList.contains('active');
if (!isActive) { openMega(item); } else { closeAllMega(); }
    });

    // Hover open
    item.addEventListener('mouseenter', function() {
openMega(item);
    });

    // Hover close — mouse leaves the entire nav-item (including mega panel)
    item.addEventListener('mouseleave', function() {
megaCloseTimer = setTimeout(function() {
    item.classList.remove('active');
    // Only hide overlay if no other item is active
    const anyActive = document.querySelectorAll('.nav-item.active').length > 0;
    if (!anyActive && megaOverlay) megaOverlay.classList.remove('show');
}, 150); // small delay prevents flicker between adjacent items
    });
});

// Close mega menu when clicking overlay
if (megaOverlay) {
    megaOverlay.addEventListener('click', function() { closeAllMega(); });
}

// Close on Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeAllMega();
});

// Close mega when clicking a mega-link
document.querySelectorAll('.mega-link, .mega-featured a').forEach(function(link) {
    link.addEventListener('click', function() { closeAllMega(); });
});

// From quote.html

(function() {
    'use strict';

    const form = document.getElementById('quoteForm');
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const feedbackBanner = document.getElementById('feedbackBanner');
    const summaryBox = document.getElementById('submissionSummary');
    const summaryContent = document.getElementById('summaryContent');

    // ===== VALIDATION RULES =====
    const validators = {
        name: function(val) {
            if (!val || val.trim().length < 2) return { ok: false, msg: '⚠ Please enter your name (min 2 characters)' };
            if (val.length > 80) return { ok: false, msg: '⚠ Name too long (max 80 characters)' };
            return { ok: true, msg: '✓ Looks good' };
        },
        email: function(val) {
            if (!val) return { ok: false, msg: '⚠ Please enter your email' };
            const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!re.test(val)) return { ok: false, msg: '⚠ Please enter a valid email address' };
            return { ok: true, msg: '✓ Valid email' };
        },
        phone: function(val) {
            if (!val) return { ok: false, msg: '⚠ Please enter your phone number' };
            const sel = document.getElementById('phoneCountry');
            const pattern = sel.options[sel.selectedIndex].dataset.pattern;
            const re = new RegExp(pattern);
            const cleanVal = val.replace(/[\s-]/g, '');
            if (!re.test(cleanVal)) return { ok: false, msg: '⚠ Please enter a valid phone number for the selected country' };
            return { ok: true, msg: '✓ Valid number' };
        },
        agree: function(val) {
            if (!val) return { ok: false, msg: '⚠ Please confirm this is a genuine inquiry' };
            return { ok: true, msg: '' };
        }
    };

    // ===== SHOW FIELD MESSAGE =====
    function showMsg(fieldId, result) {
        const msgEl = document.getElementById(fieldId + 'Msg');
        const inputEl = document.getElementById(fieldId);
        if (!msgEl) return;

        if (result.ok === true) {
            msgEl.textContent = result.msg;
            msgEl.className = 'field-msg show success';
            if (inputEl) inputEl.classList.remove('error'), inputEl.classList.add('success');
        } else if (result.ok === false) {
            msgEl.textContent = result.msg;
            msgEl.className = 'field-msg show error';
            if (inputEl) inputEl.classList.remove('success'), inputEl.classList.add('error');
        } else {
            msgEl.textContent = '';
            msgEl.className = 'field-msg';
            if (inputEl) inputEl.classList.remove('error', 'success');
        }
    }

    // ===== REAL-TIME VALIDATION =====
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const agreeInput = document.getElementById('agreeTerms');

    nameInput.addEventListener('blur', function() { showMsg('name', validators.name(this.value)); });
    nameInput.addEventListener('input', function() {
        if (this.classList.contains('error')) showMsg('name', validators.name(this.value));
    });

    emailInput.addEventListener('blur', function() { showMsg('email', validators.email(this.value)); });
    emailInput.addEventListener('input', function() {
        if (this.classList.contains('error')) showMsg('email', validators.email(this.value));
    });

    phoneInput.addEventListener('blur', function() { showMsg('phone', validators.phone(this.value)); });
    phoneInput.addEventListener('input', function() {
        if (this.classList.contains('error')) showMsg('phone', validators.phone(this.value));
    });

    document.getElementById('phoneCountry').addEventListener('change', function() {
        if (phoneInput.value) showMsg('phone', validators.phone(phoneInput.value));
    });

    agreeInput.addEventListener('change', function() {
        const result = validators.agree(this.checked);
        const msgEl = document.getElementById('agreeMsg');
        if (result.ok) { msgEl.className = 'field-msg'; }
        else { msgEl.textContent = result.msg; msgEl.className = 'field-msg show error'; }
    });

    // ===== CHECK ALL REQUIRED FIELDS =====
    function validateAll() {
        let allValid = true;
        const fields = [
            { id: 'name', val: nameInput.value, fn: validators.name },
            { id: 'email', val: emailInput.value, fn: validators.email },
            { id: 'phone', val: phoneInput.value, fn: validators.phone },
            { id: 'agree', val: agreeInput.checked, fn: validators.agree }
        ];
        fields.forEach(function(f) {
            const result = f.fn(f.val);
            showMsg(f.id, result);
            if (!result.ok) allValid = false;
        });
        return allValid;
    }

    // ===== SHOW BANNER =====
    function showBanner(type, message) {
        feedbackBanner.className = 'feedback-banner show ' + type;
        feedbackBanner.innerHTML = message;
        feedbackBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    function hideBanner() {
        feedbackBanner.className = 'feedback-banner';
        feedbackBanner.innerHTML = '';
    }

    // ===== BUILD SUMMARY =====
    function buildSummary(data) {
        const rows = [
            ['Name', data.name],
            ['Email', data.email],
            ['Phone', data.phoneCountry + ' ' + data.phone],
            ['Company', data.company || '—'],
            ['Country', data.country || '—'],
            ['Product', data.product || '—'],
            ['Message', data.message || '—']
        ];
        summaryContent.innerHTML = rows.map(function(r) {
            return '<div class="summary-row"><div class="summary-label">' + r[0] + '</div><div class="summary-value">' + escapeHtml(r[1]) + '</div></div>';
        }).join('');
        summaryBox.classList.add('show');
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = String(str);
        return div.innerHTML;
    }

    // ===== SUBMIT HANDLER =====
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        hideBanner();

        // Honeypot check — if filled, silently "succeed" without actually submitting
        const honeypot = form.querySelector('input[name="company_website"]');
        if (honeypot && honeypot.value) {
            // Bot detected — fake success
            showBanner('success', '✓ Thank you! Your inquiry has been submitted. Our team will contact you soon.');
            form.style.display = 'none';
            return;
        }

        // Validate all required fields
        if (!validateAll()) {
            showBanner('error', '⚠ Please complete all required fields highlighted below.');
            // Focus first error
            const firstError = form.querySelector('.error');
            if (firstError) firstError.focus();
            return;
        }

        // Collect form data
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            phoneCountry: document.getElementById('phoneCountry').value,
            phone: phoneInput.value.trim(),
            company: document.getElementById('company').value.trim(),
            country: document.getElementById('country').value,
            product: document.getElementById('product').value,
            message: document.getElementById('message').value.trim()
        };

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        submitText.innerHTML = '<span class="spinner"></span> Submitting...';

        // Simulate async submission (replace with real API call)
        setTimeout(function() {
            // 95% success rate simulation
            const success = Math.random() > 0.05;

            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            submitText.textContent = 'Submit Inquiry';

            if (success) {
                showBanner('success', '✓ Thank you! Your inquiry has been submitted successfully. Our sales team will contact you within 24 hours.');
                form.style.display = 'none';
                buildSummary(formData);
                // In production: send to backend API or email service here
                console.log('Form data to submit:', formData);
            } else {
                showBanner('error', '⚠ Submission failed due to a network error. Please try again or contact us via WhatsApp: +86 18925044116');
            }
        }, 1800);
    });

})();
