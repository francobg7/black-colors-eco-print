import { LucideIcon, Gift, Wrench, Camera, Tag } from 'lucide-react';

// Tipos de datos
export interface Beneficio {
  icono: LucideIcon;
  titulo: string;
  descripcion: string;
}

export interface Renovacion {
  titulo: string;
  descripcion: string;
}

export interface ImagenCuerpo {
  url: string;
  caption: string;
  ancho?: 'completo' | 'medio'; // 'completo' ocupa todo el ancho, 'medio' ocupa la mitad
}

export interface Evento {
  id: number;
  slug: string;
  titulo: string;
  subtitulo: string;
  fecha: string;
  hora: string;
  ubicacion: string;
  descripcion: string;
  categoria: string;
  destacado: boolean;
  imagenPrincipal: string;
  imagenesGaleria: string[];
  asistentes: string;
  descripcionCompleta: string;
  beneficios: Beneficio[];
  renovaciones?: Renovacion[];
  imagenesCuerpo?: ImagenCuerpo[];
  telefono?: string;
  email?: string;
  fechaCreacion: Date;
}

class NewsService {
  private eventos: Record<string, Evento>;

  constructor() {
    this.eventos = {
      'aniversario-18-anos-black-colors': {
        id: 1,
        slug: 'aniversario-18-anos-black-colors',
        titulo: 'Black Colors celebra sus 18 años',
        subtitulo: 'Reinauguración de nuestro local totalmente renovado',
        fecha: '30 de Agosto, 2025',
        hora: '09:00 - 13:00',
        ubicacion: 'Black Colors Lambaré - Cacique Lambaré y Bonifacio Ovando',
        descripcion: 'Este sábado 30 de agosto, Black Colors festeja sus 18 años de trayectoria en el mercado paraguayo con un evento especial en su local de Lambaré, donde además presentará la remodelación total de sus instalaciones.',
        categoria: 'Aniversario',
        destacado: true,
        imagenPrincipal: '/images/eventos/exterior-black.jpeg',
        imagenesGaleria: [
          '/images/eventos/black-colors2.png',
          
        ],
        asistentes: 'Abierto al público',
        descripcionCompleta: `La renovación abarca todo el espacio de atención al cliente, pensado para brindar una experiencia más cómoda y ágil a quienes visitan la empresa. El área de servicio técnico también fue modernizada, con mayor capacidad para atender equipos de todas las marcas y ofrecer diagnósticos y mantenimientos de manera más eficiente.

La fachada externa y el estacionamiento fueron completamente remodelados, logrando un acceso más seguro, práctico y atractivo para clientes y visitantes.

Black Colors reafirma así su compromiso con la innovación, el servicio de calidad y la cercanía con sus clientes, en un año donde también impulsa fuertemente sus proyectos de sustentabilidad y leasing de impresoras.

La empresa invita a toda su comunidad de clientes, aliados y amigos a participar de esta gran fiesta, donde el protagonista será el cliente.`,
        beneficios: [
          {
            icono: Gift,
            titulo: 'Carga gratuita de cartuchos',
            descripcion: 'Las 10 primeras personas en traer sus cartuchos recibirán una carga gratuita'
          },
          {
            icono: Wrench,
            titulo: 'Mantenimiento preventivo sin costo',
            descripcion: 'Las 5 primeras en traer sus equipos accederán a un mantenimiento preventivo sin costo'
          },
          {
            icono: Camera,
            titulo: 'Demostraciones gratuitas',
            descripcion: 'Demostraciones gratuitas de equipos, donde los asistentes podrán conocer de cerca las nuevas tecnologías en impresión'
          },
          {
            icono: Tag,
            titulo: 'Descuentos especiales',
            descripcion: 'Descuentos de hasta el 70% en impresoras y equipos totalmente nuevos'
          },
          {
            icono: Gift,
            titulo: 'Sorteos y regalos',
            descripcion: 'Durante toda la jornada se realizarán regalos, sorteos y entrega de cupones especiales'
          }
        ],
        renovaciones: [
          {
            titulo: 'Área de Atención al Cliente',
            descripcion: 'Espacio renovado para brindar una experiencia más cómoda y ágil'
          },
          {
            titulo: 'Servicio Técnico Modernizado',
            descripcion: 'Mayor capacidad para atender equipos de todas las marcas con diagnósticos eficientes'
          },
          {
            titulo: 'Fachada y Estacionamiento',
            descripcion: 'Acceso más seguro, práctico y atractivo para clientes y visitantes'
          }
        ],
        imagenesCuerpo: [
          {
            url: '/images/eventos/interior-brother.jpeg',
            caption: 'Vista del interior renovado de Black Colors',
            ancho: 'completo'
          },
          {
            url: '/images/eventos/interior-cartuchos.jpeg',
            caption: 'Área de servicio técnico modernizada',
            ancho: 'medio'
          },
          
        ],
        telefono: '+595 982 343 128',
        email: 'mkt@blackcolors.com.py',
        fechaCreacion: new Date('2025-08-20')
      }
    };
  }

  // Obtener todos los eventos ordenados por fecha
  public getEventos(): Evento[] {
    return Object.values(this.eventos).sort((a, b) => 
      b.fechaCreacion.getTime() - a.fechaCreacion.getTime()
    );
  }

  // Obtener eventos destacados
  public getEventosDestacados(): Evento[] {
    return this.getEventos().filter(evento => evento.destacado);
  }

  // Obtener un evento por su slug
  public getEventoPorSlug(slug: string): Evento | null {
    return this.eventos[slug] || null;
  }

  // Obtener eventos por categoría
  public getEventosPorCategoria(categoria: string): Evento[] {
    return this.getEventos().filter(
      evento => evento.categoria.toLowerCase() === categoria.toLowerCase()
    );
  }

  // Agregar un nuevo evento
  public agregarEvento(evento: Omit<Evento, 'id' | 'fechaCreacion'>): Evento {
    const nuevoId = Math.max(0, ...Object.values(this.eventos).map(e => e.id)) + 1;
    const nuevoEvento = {
      ...evento,
      id: nuevoId,
      fechaCreacion: new Date()
    };
    
    this.eventos[evento.slug] = nuevoEvento;
    return nuevoEvento;
  }

  // Actualizar un evento existente
  public actualizarEvento(slug: string, datosActualizados: Partial<Evento>): Evento | null {
    const evento = this.eventos[slug];
    if (!evento) return null;

    const eventoActualizado = {
      ...evento,
      ...datosActualizados
    };

    this.eventos[slug] = eventoActualizado;
    return eventoActualizado;
  }

  // Eliminar un evento
  public eliminarEvento(slug: string): boolean {
    if (!this.eventos[slug]) return false;
    
    delete this.eventos[slug];
    return true;
  }

  // Buscar eventos
  public buscarEventos(termino: string): Evento[] {
    termino = termino.toLowerCase();
    return this.getEventos().filter(evento =>
      evento.titulo.toLowerCase().includes(termino) ||
      evento.descripcion.toLowerCase().includes(termino) ||
      evento.categoria.toLowerCase().includes(termino)
    );
  }
}

// Exportar una instancia única del servicio
export const newsService = new NewsService();

export default newsService;
