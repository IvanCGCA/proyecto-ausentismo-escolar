const { createApp } = Vue;

createApp({
    data() {
        return {
            mostrarModal: false,
            fases: [
                {
                    titulo: 'La Planificación',
                    icon: 'fas fa-clipboard-list',
                    abierto: false, 
                    descripcion: 'Etapa que forma parte de la administración. Se definen las bases, como establecer el tema, el objetivo general, los objetivos específicos, y las metas.<br><br><b>Justificación:</b> Se exponen las razones por las que es importante y trascendente resaltando el qué, por qué y para qué se hará.'
                },
                {
                    titulo: 'La Organización',
                    icon: 'fas fa-calendar-alt',
                    abierto: false,
                    descripcion: 'En el plan de acción se definieron acciones específicas:<br><ul><li>Desarrollo de tres pláticas cada mes a 100 padres de familia.</li><li>Dinámicas del manejo de emociones a las y los niños de 8 a 12 años.</li></ul>'
                },
                {
                    titulo: 'Dirección',
                    icon: 'fas fa-users-cog',
                    abierto: false,
                    descripcion: 'Se designaron tareas de un equipo colaborador manejando ámbitos sociales, legales, educativos y de salud, trabajando conjuntamente hacia un fin común establecido en los objetivos.'
                },
                {
                    titulo: 'Control',
                    icon: 'fas fa-chart-bar',
                    abierto: false,
                    descripcion: 'Evaluación del proyecto en el proceso administrativo. Actividad encargada de verificar que los planes se hayan convertido en hechos. Aquí se establecen los estándares medibles y cuantificables (ej. registro de asistencia diario, reuniones periódicas) que van de acuerdo a la necesidad específica.'
                }
            ]
        }
    },
    methods: {
        toggleFase(index) {
            // Lógica de acordeón: cierra los demás y abre/cierra el clickeado
            this.fases.forEach((fase, i) => {
                if (i === index) {
                    fase.abierto = !fase.abierto;
                } else {
                    fase.abierto = false;
                }
            });
        }
    }
}).mount('#app');