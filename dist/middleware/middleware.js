"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewarePut = void 0;
class MiddlewarePut {
    use(req, res, next) {
        console.log(req.body);
        next();
        if (req.method === 'Put') {
            const Url = req.url.substring(12);
            console.log(Url);
        }
    }
}
exports.MiddlewarePut = MiddlewarePut;
//# sourceMappingURL=middleware.js.map