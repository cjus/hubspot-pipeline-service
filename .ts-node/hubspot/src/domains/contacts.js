"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildContactsDomain = buildContactsDomain;
var make_crud_domain_1 = require("../core/make-crud-domain");
function buildContactsDomain(send) {
    var base = (0, make_crud_domain_1.makeCrudDomain)("/crm/v3/objects/contacts", send);
    return {
        listContacts: base.list,
        getContact: base.get,
        streamContacts: base.streamAll,
        getContacts: base.getAll,
    };
}
//# sourceMappingURL=contacts.js.map