// Calculator functionality
const consumoInput = document.getElementById('consumo');
const ahorroResultado = document.getElementById('ahorro-resultado');
const ahorroAnnual = document.getElementById('ahorro-annual');

// Rates in CLP per kWh
const ELECTRICITY_RATE = 140; // Average rate

function calculateSavings() {
    if (!consumoInput) return;
    const consumo = parseFloat(consumoInput.value) || 0;

    // Calculate monthly and annual savings
    const monthlySavings = Math.round(consumo * ELECTRICITY_RATE);
    const annualSavings = monthlySavings * 12;

    // Format with thousand separators
    if (ahorroResultado) ahorroResultado.textContent = `$${monthlySavings.toLocaleString('es-CL')}/mes`;
    if (ahorroAnnual) ahorroAnnual.textContent = `$${annualSavings.toLocaleString('es-CL')}`;
}

// Add event listener to input
if (consumoInput) {
    consumoInput.addEventListener('input', calculateSavings);
    // Initial calculation
    calculateSavings();
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const formData = new FormData(this);

        // Show success message
        alert('¡Gracias por tu solicitud! Nos contactaremos pronto.');

        // Reset form
        this.reset();
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe kit cards and feature cards
document.querySelectorAll('.kit-card, .feature-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Cotización Logic
const ELECTRICITY_RATE_COTI = 140; // CLP per kWh
window.kits = {
    0: {
        name: 'Kit Inicio 3000W',
        gasto: 300,
        precio: 2900000,
        ahorro: 70000,
        specs: [
            '1 Inversor Felicity 6.000W',
            '4 Paneles 600W',
            'Batería Litio 5.000Wh',
            'Controlador MPPT 60A',
            'Cables y conectores UV',
            'Estructura de montaje'
        ],
        cuota: 150000
    },
    1: {
        name: 'Kit Base 4000W',
        gasto: 500,
        precio: 3950000,
        ahorro: 100000,
        specs: [
            '1 Inversor Felicity 6.000W',
            '6 Paneles 600W',
            'Batería Litio 8.000Wh',
            'Controlador MPPT 60A',
            'Cables y conectores UV',
            'Estructura de montaje',
            'Sistema de monitoreo'
        ],
        cuota: 200000
    },
    2: {
        name: 'Kit Smart 5000W',
        gasto: 800,
        precio: 5800000,
        ahorro: 140000,
        specs: [
            '1 Inversor Felicity 8.000W',
            '8 Paneles 600W',
            'Batería Litio 10.000Wh',
            'Controlador MPPT 80A',
            'Cables y conectores UV',
            'Estructura de montaje',
            'Sistema de monitoreo avanzado',
            'App de control remoto'
        ],
        cuota: 300000
    },
    3: {
        name: 'Kit Plus 6000W',
        gasto: 1000,
        precio: 6300000,
        ahorro: 200000,
        specs: [
            '1 Inversor Felicity 8.000W',
            '10 Paneles 600W',
            'Batería Litio 15.000Wh',
            'Controlador MPPT 80A',
            'Cables y conectores UV',
            'Estructura de montaje',
            'Sistema de monitoreo en tiempo real',
            'App y panel de control',
            'Protección contra sobrecarga'
        ],
        cuota: 300000
    },
    4: {
        name: 'Kit Empresa 15KW',
        gasto: 1500,
        precio: 21900000,
        ahorro: 800000,
        specs: [
            '1 Inversor Felicity 12.000W',
            '24 Paneles 600W',
            'Batería Litio 15.000Wh',
            'Controlador MPPT 100A',
            'Sistema de respaldo comercial',
            'Estructura de montaje reforzada',
            'Sistema de monitoreo industrial',
            'Panel de control avanzado',
            'Protección integral y redundancia'
        ],
        cuota: 1500000
    }
};

window.getRecommendedKit = function(gasto) {
    for (let [key, kit] of Object.entries(window.kits)) {
        if (gasto <= kit.gasto) {
            return { index: key, ...kit };
        }
    }
    return { index: 4, ...window.kits[4] };
}

const cotizacionForm = document.getElementById('cotizacionForm');
if (cotizacionForm) {
    cotizacionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();

        try {
            const nombre = document.getElementById('nombreCot').value;
        const email = document.getElementById('emailCot').value;
        const telefono = document.getElementById('telefonoCot').value;
        const region = document.getElementById('regionCot').value;
        const gastoValor = parseFloat(document.getElementById('gastoCot').value);
        const tipoGasto = document.getElementById('tipoGasto').value;
        const tipoPropiedad = document.getElementById('tipoPropiedad').value;
        const tipoBat = document.querySelector('input[name="tipoBat"]:checked').value;
        const comentarios = document.getElementById('comentariosCot').value;

        // Convert to kWh if needed
        let gastoKwh = gastoValor;
        let gastoDisplay = gastoValor;
        if (tipoGasto === 'pesos') {
            gastoKwh = Math.round(gastoValor / ELECTRICITY_RATE_COTI);
            gastoDisplay = gastoValor;
        }

        const kit = window.getRecommendedKit(gastoKwh);
        const ahorro = Math.round(gastoKwh * ELECTRICITY_RATE_COTI);
        const retorno = Math.round((kit.precio / ahorro) / 12);

        // Show results
        document.getElementById('resNombre').textContent = nombre;
        document.getElementById('resClienteTelefono').textContent = telefono;
        document.getElementById('resClienteEmail').textContent = email;
        document.getElementById('resClienteRegion').textContent = region;
        const gastoTexto = tipoGasto === 'pesos'
            ? '$' + gastoDisplay.toLocaleString('es-CL') + ' (' + gastoKwh + ' kWh) - ' + tipoPropiedad
            : gastoDisplay + ' kWh/mes (' + tipoPropiedad + ')';
        document.getElementById('resGasto').textContent = gastoTexto;
        document.getElementById('resKit').textContent = kit.name + ' (' + tipoBat + ')';
        document.getElementById('resPrecio').textContent = '$' + kit.precio.toLocaleString('es-CL');
        document.getElementById('resAhorro').textContent = '$' + ahorro.toLocaleString('es-CL') + '/mes';
        document.getElementById('resRetorno').textContent = retorno + ' meses (~' + Math.round(retorno/12) + ' años)';
        document.getElementById('resultadoFecha').textContent = new Date().toLocaleDateString('es-CL');

        // Store data for PDF
        window.cotizacionData = {
            nombre, email, telefono, region, gasto: gastoKwh, gastoOriginal: gastoDisplay, tipoGasto,
            tipoPropiedad, tipoBat, comentarios,
            kit: kit.name, precio: kit.precio, ahorro, retorno, fecha: new Date().toLocaleDateString('es-CL')
        };

        document.getElementById('cotizacionResultado').style.display = 'block';
        document.getElementById('cotizacionResultado').scrollIntoView({ behavior: 'smooth' });
        } catch(error) {
            console.error('Error en cotización:', error);
            alert('Error al generar la cotización. Por favor, verifica los datos.');
        }
    });

}

// Modal Logic for Kit Details - Outside of cotizacionForm check
const modal = document.getElementById('kitModal');
const modalClose = document.querySelector('.modal-close');
let currentKitIndex = null;

// Open modal with kit details
function openKitModal(kitIndex) {
    currentKitIndex = kitIndex;
    const kit = kits[kitIndex];

    document.getElementById('modalKitName').textContent = kit.name;

    const specsList = document.getElementById('modalSpecs');
    specsList.innerHTML = '';
    kit.specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        specsList.appendChild(li);
    });

    document.getElementById('modalPrice').textContent = '$' + kit.precio.toLocaleString('es-CL');
    document.getElementById('modalPayment').textContent = '$' + kit.cuota.toLocaleString('es-CL');
    document.getElementById('modalSavings').textContent = '$' + kit.ahorro.toLocaleString('es-CL') + '/mes';

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeKitModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking X
modalClose.addEventListener('click', closeKitModal);

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeKitModal();
    }
});

// Add event listeners to all "Ver Detalles" buttons
document.querySelectorAll('.kit-card').forEach((card, index) => {
    const button = card.querySelector('.btn-secondary, .btn-primary');
    if (button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openKitModal(index);
        });
    }
});

// Handle "Solicitar Cotización" button in modal
document.querySelector('.modal-cta').addEventListener('click', function() {
    closeKitModal();
    const cotizacionSection = document.getElementById('cotizaciones');
    if (cotizacionSection) {
        cotizacionSection.scrollIntoView({ behavior: 'smooth' });
    }
});