"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDealsDomain = buildDealsDomain;
var make_crud_domain_1 = require("../core/make-crud-domain");
function buildDealsDomain(send) {
    var base = (0, make_crud_domain_1.makeCrudDomain)("/crm/v3/objects/deals", send);
    return {
        listDeals: base.list,
        getDeal: base.get,
        streamDeals: base.streamAll,
        getDeals: base.getAll,
    };
}
//# sourceMappingURL=deals.js.map