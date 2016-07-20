System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_router) {
                    this._router = _router;
                    this.contact = null;
                }
                ContactComponent.prototype.onCreateNew = function () {
                    this._router.navigate(['NewContact', { lastname: this.contact.lastname }]);
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        template: "\n        <div class=\"contact-wrapper\">\n            <div>\n              <label for=\"first-name\">First Name:</label>\n              <input [(ngModel)]=\"contact.firstname\" type=\"text\">\n            </div>\n            <div>\n              <label for=\"last-name\">Last Name:</label>\n              <input [(ngModel)]=\"contact.lastname\" type=\"text\">\n            </div>\n            <div>\n              <label for=\"phone\">Phone Number:</label>\n              <input [(ngModel)]=\"contact.phone\" type=\"text\">\n            </div>\n            <div>\n              <label for=\"email\">E-Mail:</label>\n              <input [(ngModel)]=\"contact.email\" type=\"text\">\n            <div>\n            <button (click)=\"onCreateNew()\">Create new Contact from this Contact</button>\n        </div>\n    ",
                        inputs: ["contact"]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvY29udGFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4QkE7Z0JBR0ksMEJBQW9CLE9BQWU7b0JBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFGNUIsWUFBTyxHQUFZLElBQUksQ0FBQztnQkFFTyxDQUFDO2dCQUV2QyxzQ0FBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUM1RSxDQUFDO2dCQWpDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxTQUFTO3dCQUVuQixRQUFRLEVBQUUsa3pCQW9CVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7cUJBQ3RCLENBQUM7O29DQUFBO2dCQVNGLHVCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCwrQ0FRQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3QvY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbnRhY3QnLFxuXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0LW5hbWVcIj5GaXJzdCBOYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cImNvbnRhY3QuZmlyc3RuYW1lXCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3QtbmFtZVwiPkxhc3QgTmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJjb250YWN0Lmxhc3RuYW1lXCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBob25lXCI+UGhvbmUgTnVtYmVyOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cImNvbnRhY3QucGhvbmVcIiB0eXBlPVwidGV4dFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FLU1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiY29udGFjdC5lbWFpbFwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25DcmVhdGVOZXcoKVwiPkNyZWF0ZSBuZXcgQ29udGFjdCBmcm9tIHRoaXMgQ29udGFjdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGlucHV0czogW1wiY29udGFjdFwiXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50IHtcbiAgICBwdWJsaWMgY29udGFjdDogQ29udGFjdCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cblxuICAgIG9uQ3JlYXRlTmV3KCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydOZXdDb250YWN0Jywge2xhc3RuYW1lOiB0aGlzLmNvbnRhY3QubGFzdG5hbWV9XSlcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
