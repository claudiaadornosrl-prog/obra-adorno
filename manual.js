// ═══════════════════════════════════════════════════════════════════════
//  Obra Adorno · manual.js — Manual de uso (overlay 📖, autoinyectable)
//  🚨 REGLA: cada vez que se agrega o cambia una función del módulo,
//  actualizar la sección correspondiente acá (y bump del ?v= en index.html).
// ═══════════════════════════════════════════════════════════════════════

function _mEsc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function _manualSecciones() {
  return [
    { icon: '🧭', titulo: 'La barra de arriba', desc: 'Es igual en todos los módulos: mismo lugar para cada cosa y el color de la moneda del módulo (el mismo del Hub).',
      pasos: ['A la izquierda, la moneda y el título. En la computadora, tocando la palabra «Obra» se abre la lista para pasar a otro módulo (al final está «Volver al Hub»); tocando el nombre de la obra (por ej. Martínez ▾) cambiás de obra.', 'Al lado van los apartados (Tareas, Hoy, Archivos, Resumen, Equipo): son íconos; al pasar el mouse aparece el nombre, y el apartado en el que estás queda marcado en blanco con su nombre.', 'A la derecha: 🔔 Avisos.', 'En el celular: los apartados y los Avisos están adentro del botón ☰; a la vista queda 🏠 Hub (volver al Hub).', 'Para cerrar la sesión: volvé al Hub y tocá 👤 (arriba) → Salir; se cierra en todos los módulos. En los módulos no hay botón de Salir.', '¿Dudas? Preguntale a Clodi (el botón de abajo a la derecha): sabe todo lo que dice este manual.'] },
    { icon: '🔐', titulo: 'Entrar', desc: 'Entrás con tu email y clave. Si sos el arquitecto y dice que no tenés acceso, pedile a JP que te agregue al equipo.',
      pasos: ['La sesión queda guardada en el navegador: la próxima vez entrás directo.', 'Lo que podés hacer adentro depende de tu perfil en el Hub (ver «Permisos»).', 'Código del celular (doble factor): si sos admin o directora y lo activaste en el Hub (panel de sesión, "Código del celular al entrar"), en cada computadora te pide, después de la clave, el código de 6 números de la app de autenticación del celular (Google o Microsoft Authenticator), y después una vez cada 30 días. En el celular registrado con "Entrar con la cara en este equipo" no hace falta ni clave ni código: te pide la cara (o la huella) al abrir. Si cambiás o perdés el celular, avisale a JP para darlo de baja.', 'En el celular podés instalarlo como app: en Safari "Compartir → Agregar a pantalla de inicio"; en Chrome "Instalar".'] },
    { icon: '🔑', titulo: 'Permisos', desc: 'Qué puede hacer cada uno lo maneja JP en el Hub (👤 → Permisos): cada perfil tiene, para cada función del módulo, Habilitada, Pide permiso u Oculta. Ver la obra (tareas, archivos, novedades) lo puede todo el equipo; los permisos son para lo que graba.',
      pasos: ['Las funciones de Obra son: Cargar y mover tareas (también las etapas) · Borrar tareas · Escribir novedades del día (el detalle de la tarea) · Subir fotos, presupuestos y facturas (también el link para el grupo) · Generar y mandar el resumen · Aprobar presupuestos y marcar facturas pagadas · Registrar pagos y pedidos de pago (pedir pago, cargar comprobante, confirmar o rechazar) · Agregar o sacar participantes (apartado Equipo) · Crear una obra nueva.', 'Habilitada: se usa normal. Oculta: el botón o el apartado no aparece.', 'Pide permiso: el botón se ve, pero al usarlo aparece «Pedir permiso»: tiene que poner su mail y su contraseña alguien que tenga esa función habilitada (si tiene el código del celular activado, también el código). Esa sesión se cierra sola apenas se graba, y la tuya sigue igual.', 'La base de datos controla lo mismo: aunque alguien fuerce el botón, no graba sin el permiso.', 'Los administradores tienen todo habilitado. Para entrar al módulo hay que estar en el Equipo de la obra (o ser administrador).', 'Si dice «No tenés permiso para esto», pedile a JP que lo habilite en tu perfil del Hub.', '📷 Registra quién: si JP marcó una función con «Registra quién» en el Hub, al usarla queda anotado quién la hizo (JP lo ve en Hub → Permisos → Registro). Con usuario personal se anota solo, sin preguntar nada. Con una cuenta compartida se pide quién la está haciendo: por la cara, o tocando tu nombre en la lista. No se guarda ninguna foto.', 'Si pidió permiso, queda anotado quien usó el módulo (no quien autorizó). En las que preguntan «¿Seguro?», se anota recién cuando decís que sí.', 'El arquitecto y los contratistas, que entran con su usuario personal, también se anotan solos: en el Registro salen con el nombre que tienen en el Equipo de la obra.'] },
    { icon: '🏠', titulo: 'Hoy', desc: 'La foto de la obra: cuántas tareas hay pendientes, en curso y terminadas, qué venció o vence esta semana, las últimas novedades y la plata (presupuestos y facturas).',
      pasos: ['Tocando una tarea de la lista se abre su ficha.', 'El porcentaje de avance es terminadas sobre el total (sin contar canceladas).'] },
    { icon: '🗂', titulo: 'Tareas', desc: 'Tres columnas: Pendientes → En curso → Terminadas. Cada tarjeta es una tarea con su fecha límite, responsable y rubro.',
      pasos: ['El ➕ grande de arriba crea una tarea nueva: título, detalle, rubro, responsable (arquitecto, Adorno o contratista), prioridad y fecha límite.', 'En cada tarjeta: ▶ la empieza (pasa a En curso), ✓ la termina, ↶ la reabre. Todo queda registrado en las novedades de la tarea.', 'Tocando la tarjeta se abre la ficha completa: se edita, se comenta y se adjuntan fotos, presupuestos o facturas.', 'Fecha en rojo = vencida; en ámbar = vence en 3 días o menos. Borde rojo = prioridad alta.', 'Si una tarea no va más, ponela en Cancelada en vez de borrarla (borrar la puede solo quien tiene «Borrar tareas» en el Hub).'] },
    { icon: '☑', titulo: 'Etapas dentro de una tarea', desc: 'Una tarea grande (por ej. "Arreglar el techo") se parte en pasos: pedir presupuestos, elegir, comprar materiales, definir el equipo, ejecutar.',
      pasos: ['En la ficha de la tarea, sección Etapas: escribí el paso, opcionalmente fecha y responsable, y tocá ➕ (o Enter).', 'Se tildan a medida que se hacen. Queda anotado en el hilo quién y cuándo; si lo tilda el arquitecto, a JP le llega un push.', 'En la tarjeta del tablero se ve el avance (por ej. 2/5 etapas) con una barrita.', 'Las etapas con fecha vencida o próxima aparecen en Hoy y en el mail diario del arquitecto.'] },
    { icon: '💬', titulo: 'Novedades y comentarios', desc: 'Dentro de cada tarea hay un hilo de comentarios. Es el lugar para contar cómo va, qué falta o qué se decidió.',
      pasos: ['Escribí y tocá el avión ➤. Cada comentario del arquitecto le llega a JP como notificación.', 'Con el clip 📎 se adjuntan archivos a la tarea (foto, presupuesto, factura, plano).', 'Los cambios de estado y los archivos subidos aparecen solos en el hilo.'] },
    { icon: '📄', titulo: 'Presupuestos', desc: 'El arquitecto sube los presupuestos de proveedores (PDF, foto o Excel) con proveedor, importe y a qué tarea corresponden. Los aprueba o rechaza quien tiene «Aprobar presupuestos y marcar facturas pagadas» en el Hub (Adorno).',
      pasos: ['Subir: elegí el archivo, completá proveedor e importe, y tocá el ícono de subir.', 'Con el permiso de aprobar: ✓ aprueba, ⊘ rechaza, ↶ vuelve a pendiente. El total de arriba es la suma de lo que estás viendo.', 'Abrí el archivo tocando su nombre (el link dura una hora; volvé a tocar si venció).'] },
    { icon: '🧾', titulo: 'Facturas', desc: 'Facturas y tickets de lo comprado para la obra. Las marca como pagadas quien tiene «Aprobar presupuestos y marcar facturas pagadas» en el Hub.',
      pasos: ['Igual que los presupuestos: archivo, proveedor, importe, fecha y tarea.', 'Con ese permiso: $ marca pagada, ⊘ rechaza. "Por pagar" es lo que falta pagar.'] },
    { icon: '💸', titulo: 'Pagos', desc: 'Lo que Adorno le paga al arquitecto o a los proveedores de la obra, con comprobante opcional.',
      pasos: ['Registra pagos (y pide pagos, carga comprobantes, los confirma o rechaza) quien tiene «Registrar pagos y pedidos de pago» en el Hub: importe, fecha, a quién, medio, la factura que cancela (queda marcada como pagada) y el comprobante.', 'Al arquitecto le llega un mail con el detalle de cada pago, y lo ve en esta pestaña.', 'En Hoy → Plata se ve el total pagado.'] },
    { icon: '📷', titulo: 'Fotos y planos', desc: 'Galería de fotos de avance, planos y renders. Se pueden subir varias a la vez.',
      pasos: ['Elegí tipo (foto, plano, otro), la tarea si corresponde, y una nota de qué se ve.', 'Tocando la miniatura se abre en grande.'] },
    { icon: '🔔', titulo: 'Avisos en el celular (push)', desc: 'Nada va por mail: todo llega como notificación. Para recibirlas hay que activarlas una vez en cada dispositivo.',
      pasos: ['En el celular, instalá la app: iPhone → Safari → Compartir → "Agregar a pantalla de inicio"; Android → Chrome → "Instalar". Abrila desde el ícono.', 'Tocá la campanita 🔔 del encabezado y aceptá los permisos. Queda amarilla cuando está activa.', 'Al arquitecto le llega: tarea nueva, comentario de Adorno, presupuesto aprobado o rechazado, factura pagada, pago registrado, y a las 9:00 (lunes a sábado) un resumen con lo vencido, lo que vence en 3 días y lo que lleva más de una semana sin novedades.', 'A JP le llega cada comentario, archivo, etapa o cambio de estado del arquitecto, y el resumen diario.'] },
    { icon: '👥', titulo: 'Equipo', desc: 'Quiénes entran al módulo y quiénes reciben avisos. Lo ve y lo cambia quien tiene «Agregar o sacar participantes» en el Hub.',
      pasos: ['Primero crear el usuario en Supabase (Authentication → Users → Add user, con email y clave) y después agregarlo acá con el mismo email.', 'El ícono ➤ prende/apaga los avisos; el interruptor le saca o devuelve el acceso.', '"Ver qué mandaría hoy" muestra el mail y el push del recordatorio sin mandar nada.'] },
  ];
}

function abrirManual() {
  if (document.getElementById('manual-overlay')) return;
  const items = _manualSecciones();
  const ov = document.createElement('div');
  ov.id = 'manual-overlay';
  ov.innerHTML = `
    <div class="m-box">
      <div class="m-head">
        <span style="font-size:22px;">📖</span>
        <div style="flex:1;">
          <div style="font-weight:700;font-size:16px;">Manual · Obra</div>
          <div style="font-size:12px;opacity:.85;">Guía rápida de cada herramienta del módulo</div>
        </div>
        <button class="m-close" onclick="cerrarManual()">✕</button>
      </div>
      ${items.map((s, i) => `
        <div class="m-sec">
          <div class="m-tit">${s.icon} ${i + 1}. ${_mEsc(s.titulo)}</div>
          <div class="m-desc">${_mEsc(s.desc)}</div>
          <ul class="m-pasos">${s.pasos.map(p => `<li>${_mEsc(p)}</li>`).join('')}</ul>
        </div>`).join('')}
      <div class="m-foot">💡 Este manual se actualiza junto con el sistema. ¿Falta algo o no funciona? Avisale a JP.</div>
    </div>`;
  document.body.appendChild(ov);
  _manualLupa(ov);
  document.body.style.overflow = 'hidden';
}

function cerrarManual() {
  const ov = document.getElementById('manual-overlay');
  if (ov) ov.remove();
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarManual(); });

(function _manualInit() {
  const css = document.createElement('style');
  css.textContent = `
    #manual-overlay{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:9999;display:flex;align-items:flex-start;justify-content:center;padding:20px 12px;overflow-y:auto;-webkit-overflow-scrolling:touch;}
    #manual-overlay .m-box{background:#f8fafc;border-radius:14px;max-width:760px;width:100%;padding-bottom:6px;box-shadow:0 20px 60px rgba(0,0,0,.3);}
    #manual-overlay .m-head{position:sticky;top:0;background:#b45309;color:#fff;padding:14px 18px;border-radius:14px 14px 0 0;display:flex;align-items:center;gap:10px;z-index:1;}
    #manual-overlay .m-close{background:rgba(255,255,255,.18);border:none;color:#fff;font-size:16px;border-radius:8px;padding:6px 11px;cursor:pointer;}
    #manual-overlay .m-sec{background:#fff;border:1px solid #e2e8f0;border-left:4px solid #b45309;border-radius:10px;margin:14px 14px 0;padding:14px 18px;}
    #manual-overlay .m-tit{font-weight:700;font-size:15px;margin-bottom:4px;color:#92400e;}
    #manual-overlay .m-desc{font-size:13px;color:#475569;margin-bottom:8px;}
    #manual-overlay .m-pasos{margin:0 0 2px 18px;padding:0;font-size:13px;line-height:1.65;color:#334155;}
    #manual-overlay .m-pasos li{margin-bottom:4px;}
    #manual-overlay .m-foot{margin:16px 14px 12px;background:#fef3c7;border-left:4px solid #d97706;border-radius:8px;padding:11px 14px;font-size:12.5px;color:#92400e;}`;
  document.head.appendChild(css);

  const nav = document.querySelector('nav.tabs');
  if (nav) {
    const b = document.createElement('button');
    b.innerHTML = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg><span class="lb">Manual</span>'; b.title = 'Manual';
    b.onclick = () => abrirManual();
    b.title = 'Manual'; nav.appendChild(b);
  }
})();

// ── 🔍 Lupa del manual (29-sep, pedido Contreras): busca por palabra, sin tildes ni mayúsculas.
//    Deja solo las secciones que la contienen, dentro de ellas los pasos que la contienen,
//    y resalta la palabra. Mismo bloque en todos los módulos (el de RRHH usa _mLupaFiltrar).
function _mLupaNorm(s){ return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
function _mLupaMarcar(el, q){
  const nodos = [], w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  while (w.nextNode()) nodos.push(w.currentNode);
  nodos.forEach(n => {
    const t = n.nodeValue; let norm = '', mapa = [];
    for (let i = 0; i < t.length; i++){ const c = _mLupaNorm(t[i]); for (let k = 0; k < c.length; k++){ norm += c[k]; mapa.push(i); } }
    let desde = 0, pos, frag = null, ult = 0;
    while (q && (pos = norm.indexOf(q, desde)) >= 0){
      frag = frag || document.createDocumentFragment();
      const a = mapa[pos], b = mapa[pos + q.length - 1] + 1;
      if (a > ult) frag.appendChild(document.createTextNode(t.slice(ult, a)));
      const m = document.createElement('mark'); m.textContent = t.slice(a, b);
      m.style.cssText = 'background:#fde047;color:inherit;padding:0 1px;border-radius:3px'; frag.appendChild(m);
      ult = b; desde = pos + q.length;
    }
    if (frag){ if (ult < t.length) frag.appendChild(document.createTextNode(t.slice(ult))); n.parentNode.replaceChild(frag, n); }
  });
}
function _mLupaFiltrar(cont, selSec, texto, info){
  if (!cont) return;
  const q = _mLupaNorm(String(texto || '').trim());
  let vistas = 0;
  cont.querySelectorAll(selSec).forEach(sec => {
    if (sec.dataset.mOrig == null) sec.dataset.mOrig = sec.innerHTML; else sec.innerHTML = sec.dataset.mOrig;
    if (!q){ sec.style.display = ''; return; }
    const lis = [...sec.querySelectorAll('li')];
    const enLis = lis.filter(li => _mLupaNorm(li.textContent).includes(q));
    const hay = _mLupaNorm(sec.textContent).includes(q);
    sec.style.display = hay ? '' : 'none';
    if (!hay) return;
    vistas++;
    if (enLis.length) lis.forEach(li => { if (!enLis.includes(li)) li.style.display = 'none'; });
    _mLupaMarcar(sec, q);
  });
  if (info) info.textContent = !q ? '' : vistas ? `${vistas} ${vistas === 1 ? 'sección' : 'secciones'} con «${String(texto).trim()}»` : `No encontré «${String(texto).trim()}» en el manual.`;
  const primera = q && cont.querySelector('mark');
  if (primera) primera.scrollIntoView({block: 'center', behavior: 'smooth'});
}
function _manualLupa(ov){
  const head = ov && ov.querySelector('.m-head'); if (!head) return;
  head.style.flexWrap = 'wrap';
  const box = document.createElement('div');
  box.style.cssText = 'flex-basis:100%;display:flex;gap:8px;align-items:center;margin-top:8px';
  box.innerHTML = '<input type="search" placeholder="🔍 Buscar en el manual (por ej.: equivalencias, remito, echeq)…" '
    + 'style="flex:1;min-width:0;padding:8px 11px;border-radius:9px;border:none;font-size:14px;color:#0f172a;font-family:inherit">'
    + '<span class="m-lupa-info" style="font-size:12px;opacity:.9;white-space:nowrap"></span>';
  head.appendChild(box);
  const inp = box.querySelector('input'), info = box.querySelector('.m-lupa-info');
  let t = null;
  inp.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => _mLupaFiltrar(ov, '.m-sec', inp.value, info), 250); });
  inp.addEventListener('keydown', e => { if (e.key === 'Escape' && inp.value){ e.stopPropagation(); inp.value = ''; _mLupaFiltrar(ov, '.m-sec', '', info); } });
  setTimeout(() => inp.focus(), 50);
}
