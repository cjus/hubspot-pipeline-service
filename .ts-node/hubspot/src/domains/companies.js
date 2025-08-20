"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCompaniesDomain = buildCompaniesDomain;
var make_crud_domain_1 = require("../core/make-crud-domain");
function buildCompaniesDomain(send) {
    var base = (0, make_crud_domain_1.makeCrudDomain)("/crm/v3/objects/companies", send);
    return {
        listCompanies: base.list,
        getCompany: base.get,
        streamCompanies: base.streamAll,
        getCompanies: base.getAll,
    };
}
//# sourceMappingURL=companies.js.map