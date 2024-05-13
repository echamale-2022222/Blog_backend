import PublicationModel from "./publication.model.js";
import { response } from "express";

export const publicationGestorOpiniones = async (res = response) => {
    const publicationDefault = new PublicationModel({
        titulo: "Gestor de opiniones",
        descripcion: "Un gestor de opiniones es una aplicación web que permite a los usuarios compartir sus opiniones sobre un tema en particular.",
        imagenPrincipal: "https://factorialhr.es/wp-content/uploads/2021/07/02160548/gestion-de-personas-min.jpg",
        autor: "Edwar Chamalé",
        link: "https://github.com/echamale-2022222/PS-gestorOpiniones.git",
        tecnologiasUtilizadas: "Node, Express, MongoDB",
        deQueTrata: "El proyecto consiste en una aplicación web que permite a los usuarios compartir sus opiniones sobre un tema en particular y poder comentar las opiniones de otros usuarios.",
        comoFunciona: "El usuario se registra en la aplicación, luego puede crear una opinión sobre un tema en particular, también puede comentar las opiniones de otros usuarios.",
        imagenes: ["https://www.veiss.com/blog/wp-content/uploads/2015/07/opiniones-internet.jpg",
            "https://www.grupoftp.com/noticias/wp-content/uploads/2019/11/exp4-825x510.jpg"],
        caracteristicasPrincipales: "Registro de usuarios, creación de opiniones, comentarios de opiniones.",
        caracteristicasSecundarias: "Edición de opiniones, eliminación de opiniones, eliminación de comentarios.",
        etiquetas: "Node, Express, MongoDB"
    })
    await publicationDefault.save();
}

export const publicationGestorEmpresas = async (res = response) => {
    const publicationDefault = new PublicationModel({
        titulo: "Gestor de empresas",
        descripcion: "Un gestor de empresas es una aplicación web que permite a los usuarios gestionar la información de una empresa en particular.",
        imagenPrincipal: "https://cypes.grupoeurohispana.com/img/profesion/335/recurso-principal-254103417.jpg",
        autor: "Edwar Chamalé",
        link: "https://github.com/echamale-2022222/Ta-coperex.git",
        tecnologiasUtilizadas: "Node, Express, MongoDB",
        deQueTrata: "El proyecto consiste en una aplicación web que permite a los usuarios gestionar la información de una empresa en particular, como el nombre, dirección, teléfono, etc y poder visualizar la información en un excel.",
        comoFunciona: "El usuario se registra en la aplicación, luego puede crear una empresa, editar la información de la empresa, eliminar la empresa y exportar la información de la empresa en un excel.",
        imagenes: ["https://blog.hubspot.es/hubfs/Pruebalabasededatos3.jpeg",
            "https://soporte.mygestion.com/media/wp-content/uploads/software-gestion-empresarial-700x467.png"],
        caracteristicasPrincipales: "Registro de empresas, edición de empresas, eliminación de empresas, exportar información de empresas en excel.",
        caracteristicasSecundarias: "Registro de usuarios, edición de usuarios, eliminación de usuarios.",
        etiquetas: "Node, Express, MongoDB"
    })
    await publicationDefault.save();
}

export const publicationAgendaWeb = async (res = response) => {
    const publicationDefault = new PublicationModel({
        titulo: "Agenda web",
        descripcion: "Agenda web es una aplicación web que permite agregar personas, ver los contactos favoritos y listar los contactos, y adicional se implemento un todo list.",
        imagenPrincipal: "https://images.ctfassets.net/spoqsaf9291f/1UiXYEfcJtvjGlp8GdFcYA/526848412a7cc71a9aa3a18a5bd4af8d/Highlight-2.jpg",
        autor: "Edwar Chamalé",
        link: "https://github.com/echamale-2022222/PS_agendaWeb.git",
        tecnologiasUtilizadas: "HTML, CSS, JavaScript",
        deQueTrata: "El proyecto consiste en una aplicación web que permite agregar personas, ver los contactos favoritos y listar los contactos, y adicional se implemento un todo list que es funcional",
        comoFunciona: "El usuario inicia sesion, puede ver sus contactos y ver solo los favoritos, puede agregar un contacto, puede agregar tareas en el todo list.",
        imagenes: ["https://screenshots.codesandbox.io/3pg71/49.png",
            "https://i.ytimg.com/vi/vQCpURzm1kk/maxresdefault.jpg"],
        caracteristicasPrincipales: "Registro de usuarios, creación de contactos, ver contactos favoritos, listar contactos, agregar tareas en el todo list.",
        caracteristicasSecundarias: "Edición de tareas, eliminación de tareas, completar tareas en el todo list",
        etiquetas: "HTML, CSS, JavaScript"
    })
    await publicationDefault.save();
}

export const publicationClonKinal = async (res = response) => {
    const publicationDefault = new PublicationModel({
        titulo: "Clon página Kinal",
        descripcion: "Clon de la página de Kinal, una página web que muestra información sobre la institución educativa Kinal.",
        imagenPrincipal: "https://github.com/echamale-2022222/Ta-laboratorio-1/raw/dev/assets/resources/img/seccionPrincipal.png?raw=true",
        autor: "Edwar Chamalé",
        link: "https://github.com/echamale-2022222/Ta-laboratorio-1.git",
        tecnologiasUtilizadas: "HTML, CSS, JavaScript",
        deQueTrata: "El proyecto consiste en un clon de la página de Kinal, una página web que muestra información sobre la institución educativa Kinal y en la cual rediseñe a mi gusto.",
        comoFunciona: "El usuario puede ver la página web, puede ver la información de la institución educativa Kinal, puede ver los cursos que ofrece la institución.",
        imagenes: ["https://github.com/echamale-2022222/Ta-laboratorio-1/raw/dev/assets/resources/img/informacionKinal.png?raw=true",
            "https://github.com/echamale-2022222/Ta-laboratorio-1/raw/dev/assets/resources/img/footer.png?raw=true"],
        caracteristicasPrincipales: "Registro de usuarios, creación de opiniones, comentarios de opiniones.",
        caracteristicasSecundarias: "Edición de opiniones, eliminación de opiniones, eliminación de comentarios.",
        etiquetas: "Node, Express, MongoDB"
    })
    await publicationDefault.save();
}

export const publicationUsuariosMascotas = async (res = response) => {
    const publicationDefault = new PublicationModel({
        titulo: "Gestor de usuarios y mascotas",
        descripcion: "Un gestor de usuarios y mascotas es una aplicación web que permite a los usuarios gestionar la información de los usuarios y sus mascotas.",
        imagenPrincipal: "https://www.aspca.org/sites/default/files/how-you-can-help_adoptions-tips_main-image-dog.jpg",
        autor: "Edwar Chamalé",
        link: "https://github.com/echamale-2022222/Ta-laboratorio-2.git",
        tecnologiasUtilizadas: "Node, Express, MongoDB",
        deQueTrata: "El proyecto consiste en una aplicación web que permite a los usuarios gestionar la información de los usuarios y sus mascotas, como el nombre, dirección, teléfono, etc y poder visualizar la información en un excel.",
        comoFunciona: "El usuario se registra en la aplicación, luego puede crear un usuario, editar la información del usuario, eliminar el usuario y manejar la información de las mascotas.",
        imagenes: ["https://static.fundacion-affinity.org/cdn/farfuture/Iw72MrSzZXHRDPA8aY3jBP5ziU3BxeVv-izl81oONcw/mtime:1528830292/sites/default/files/fotos_principales/115863736_mis_hijos_quieren_adoptar_un_perrogato.jpg?itok=n2kVSTSl",
            "https://www.maricopa.gov/ImageRepository/Document?documentId=77037"],
        caracteristicasPrincipales: "Registro de usuarios, edición de usuarios, eliminación de usuarios, agregar mascotas a los usuarios, eliminar mascotas de los usuarios.",
        caracteristicasSecundarias: "Registro de mascotas, edición de mascotas, eliminación de mascotas.",
        etiquetas: "Node, Express, MongoDB"
    })
    await publicationDefault.save();
}

export const publicationAlmacenadoraF = async (res = response) => {
    const publicationDefault = new PublicationModel({
        titulo: "Almacenadora parte frontend",
        descripcion: "Una almacenadora es una aplicación web que permite a los usuarios gestionar la información de los productos de una empresa como un todo list.",
        imagenPrincipal: "https://alvamex.com/wp-content/uploads/2014/08/3.jpg",
        autor: "Edwar Chamalé",
        link: "https://github.com/IN6BV/Almacenadora_frontend.git",
        tecnologiasUtilizadas: "React, JavaScript, HTML, CSS, Material UI",
        deQueTrata: "El proyecto consiste en una aplicación web que permite asignar a los usuarios tareas que deben realizar en cierto tiempo y poder visualizar el avance del mismo.",
        comoFunciona: "El usuario crea la tarea, asigna la tarea a un usuario, el usuario puede ver la tarea asignada y marcarla como completada.",
        imagenes: ["https://export.com.gt/attach/cbm/empresas/930-5daf72ad86c70-portal.jpeg",
            "https://www.almer.com.mx/uploads/posts/5d0d5ae3708c7629.png"],
        caracteristicasPrincipales: "Creación de tareas, asignación de tareas, marcar tareas como completadas.",
        caracteristicasSecundarias: "Edición de tareas, eliminación de tareas, ver tareas completadas y incompletas.",
        etiquetas: "React, JavaScript, HTML, CSS, Material UI"
    })
    await publicationDefault.save();
}
export const publicationAlmacenadoraB = async (res = response) => {
    const publicationDefault = new PublicationModel({
        titulo: "Almacenadora parte backend",
        descripcion: "Una almacenadora es una aplicación web que permite a los usuarios gestionar la información de los productos de una empresa como un todo list.",
        imagenPrincipal: "https://alvamex.com/wp-content/uploads/2014/08/3.jpg",
        autor: "Edwar Chamalé",
        link: "https://github.com/IN6BV/Almacenadora-backend.git",
        tecnologiasUtilizadas: "React, JavaScript, HTML, CSS, Material UI",
        deQueTrata: "El proyecto consiste en una aplicación web que permite asignar a los usuarios tareas que deben realizar en cierto tiempo y poder visualizar el avance del mismo.",
        comoFunciona: "El usuario crea la tarea, asigna la tarea a un usuario, el usuario puede ver la tarea asignada y marcarla como completada.",
        imagenes: ["https://export.com.gt/attach/cbm/empresas/930-5daf72ad86c70-portal.jpeg",
            "https://www.almer.com.mx/uploads/posts/5d0d5ae3708c7629.png"],
        caracteristicasPrincipales: "Creación de tareas, asignación de tareas, marcar tareas como completadas.",
        caracteristicasSecundarias: "Edición de tareas, eliminación de tareas, ver tareas completadas y incompletas.",
        etiquetas: "React, JavaScript, HTML, CSS, Material UI"
    })
    await publicationDefault.save();
}

export const comprobarInformacion = async (req, res) => {
    const publications = await PublicationModel.find();

    console.log("hola");
    if (publications.length === 0) {
        publicationGestorOpiniones(res);
        publicationGestorEmpresas(res);
        publicationAgendaWeb(res);
        publicationClonKinal(res);
        publicationUsuariosMascotas(res);
        publicationAlmacenadoraF(res);
        publicationAlmacenadoraB(res);
    } else {
        console.log('Ya se han creado las publicaciones');
    }
}

export const publicationGet = async (req, res) => {
    try {
        const publications = await PublicationModel.find();
        res.status(200).json(publications);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const publicationById = async (req, res) => {
    const { id } = req.params;
    const publication = await PublicationModel.findById(id);
    
    if (!publication) {
        return res.status(404).json({ message: "Publication not found" });
    } else {
    res.status(200).json(publication);
    }


}

export const publicationPut = async (req, res) => {
    const { id } = req.params;
    
    const { nombre, comentario } = req.body;

    const currentDate = new Date();
    const nuevoComentario = { nombre: nombre, comentario: comentario, fecha: currentDate };
    console.log(nuevoComentario);
await PublicationModel.findByIdAndUpdate(id, { $push: { comentarios: nuevoComentario } });
    res.status(200).json({ message: "Comentario agregado" });
}