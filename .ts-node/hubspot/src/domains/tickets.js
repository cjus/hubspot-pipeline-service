"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTicketsDomain = buildTicketsDomain;
var make_crud_domain_1 = require("../core/make-crud-domain");
function buildTicketsDomain(send) {
    var base = (0, make_crud_domain_1.makeCrudDomain)("/crm/v3/objects/tickets", send);
    return {
        listTickets: base.list,
        getTicket: base.get,
        streamTickets: base.streamAll,
        getTickets: base.getAll,
    };
}
//# sourceMappingURL=tickets.js.map