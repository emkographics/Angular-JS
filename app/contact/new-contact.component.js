System.register(['angular2/core', 'angular2/router', './contact.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, contact_service_1;
    var NewContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                function NewContactComponent(_contactService, _router, _routeParams) {
                    this._contactService = _contactService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                NewContactComponent.prototype.onSubmit = function () {
                    this._contactService.insertContact(this.newContact);
                    this._router.navigate(['Contacts']);
                };
                NewContactComponent.prototype.ngOnInit = function () {
                    this.newContact = { firstname: '', lastname: this._routeParams.get('lastname'), phone: '', email: '' };
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        template: "\n      <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"contact-wrapper\">\n            <div>\n              <label for=\"first-name\">First Name:</label>\n              <input id=\"first-name\" type=\"text\"\n                ngControl=\"firstname\"\n                [(ngModel)]=\"newContact.firstname\"\n                required\n              >\n            </div>\n            <div>\n              <label for=\"last-name\">Last Name:</label>\n              <input id=\"last-name\" type=\"text\" \n                ngControl=\"lastname\"\n                [(ngModel)]=\"newContact.lastname\"\n                required\n              >\n            </div>\n            <div>\n              <label for=\"phone\">Phone Number:</label>\n              <input id=\"phone\" type=\"text\"\n                ngControl=\"phone\"\n                [(ngModel)]=\"newContact.phone\"\n                required\n              >\n            </div>\n            <div>\n              <label for=\"email\">E-Mail:</label>\n              <input id=\"email\" type=\"text\"\n                ngControl=\"email\"\n                [(ngModel)]=\"newContact.email\"\n                required\n              >\n            <div>\n            <button type=\"submit\" [disabled]=\"!myForm.form.valid\"> Create Contact </button>\n        </div>\n    ",
                        providers: [contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router, router_2.RouteParams])
                ], NewContactComponent);
                return NewContactComponent;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvbmV3LWNvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQStDQTtnQkFNSSw2QkFBb0IsZUFBK0IsRUFBVSxPQUFlLEVBQVUsWUFBeUI7b0JBQTNGLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUUvRyxDQUFDO2dCQUVELHNDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsc0NBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFDLENBQUM7Z0JBQ3ZHLENBQUM7Z0JBekRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLG16Q0FvQ1Q7d0JBQ0QsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztxQkFDOUIsQ0FBQzs7dUNBQUE7Z0JBbUJGLDBCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCxxREFrQkMsQ0FBQSIsImZpbGUiOiJjb250YWN0L25ldy1jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udGFjdFNlcnZpY2V9IGZyb20gJy4vY29udGFjdC5zZXJ2aWNlJztcbmltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGZvcm0gI215Rm9ybT1cIm5nRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgY2xhc3M9XCJjb250YWN0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdC1uYW1lXCI+Rmlyc3QgTmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaXJzdC1uYW1lXCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5nQ29udHJvbD1cImZpcnN0bmFtZVwiXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJuZXdDb250YWN0LmZpcnN0bmFtZVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdC1uYW1lXCI+TGFzdCBOYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cImxhc3QtbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgbmdDb250cm9sPVwibGFzdG5hbWVcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibmV3Q29udGFjdC5sYXN0bmFtZVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGhvbmVcIj5QaG9uZSBOdW1iZXI6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGhvbmVcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmdDb250cm9sPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibmV3Q29udGFjdC5waG9uZVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FLU1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmdDb250cm9sPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibmV3Q29udGFjdC5lbWFpbFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCIhbXlGb3JtLmZvcm0udmFsaWRcIj4gQ3JlYXRlIENvbnRhY3QgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbQ29udGFjdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE5ld0NvbnRhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAvLyBwdWJsaWMgcGFzc2VkbGFzdG5hbWUgPSBcIlwiO1xuXG4gICBuZXdDb250YWN0OiBDb250YWN0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29udGFjdFNlcnZpY2U6IENvbnRhY3RTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKSB7XG5cbiAgICB9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgIHRoaXMuX2NvbnRhY3RTZXJ2aWNlLmluc2VydENvbnRhY3QodGhpcy5uZXdDb250YWN0KTtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0NvbnRhY3RzJ10pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgIHRoaXMubmV3Q29udGFjdCA9IHtmaXJzdG5hbWU6ICcnLCBsYXN0bmFtZTogdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdsYXN0bmFtZScpLCBwaG9uZTogJycsIGVtYWlsOiAnJ307XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
