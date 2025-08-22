import Notificacion from "../entidades/Notificacion.js";

export default class FactoryNotificacion {
    static crearNotificacionNuevoPedido(pedido) {
        const vendedor = pedido.items[0].producto.vendedor;
        const comprador = pedido.comprador;

        const productos = pedido.items
            .map(item => `${item.producto.titulo} x${item.cantidad}`)
            .join(", ");

        const mensaje =
            `Nuevo pedido de ${comprador.nombre}: ${productos}. ` +
            `Total: ${pedido.total} ${pedido.moneda}. ` +
            `Entrega: ${pedido.direccionEntrega.calle}, ${pedido.direccionEntrega.ciudad}`;

        return new Notificacion({
            id: crypto.randomUUID(),
            usuarioDestino: vendedor,
            mensaje
        });
    }

    static crearNotificacionPedidoEnviado(pedido, vendedor) {
        const comprador = pedido.comprador;

        const mensaje =
            `Tu pedido ${pedido.id} fue marcado como ENVIADO por ${vendedor.nombre}. ` +
            `Pronto llegará a la dirección indicada: ${pedido.direccionEntrega.calle}, ${pedido.direccionEntrega.ciudad}`;

        return new Notificacion({
            id: crypto.randomUUID(),
            usuarioDestino: comprador,
            mensaje
        });
    }

    static crearNotificacionPedidoCancelado(pedido, comprador) {
        const vendedor = pedido.items[0].producto.vendedor;

        const mensaje =
            `El comprador ${comprador.nombre} canceló el pedido ${pedido.id}.`;

        return new Notificacion({
            id: crypto.randomUUID(),
            usuarioDestino: vendedor,
            mensaje
        });
    }
}
