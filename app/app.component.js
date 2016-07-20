System.register(['angular2/core', "./contact/contact-list.component", "./contact/new-contact.component", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, contact_list_component_1, new_contact_component_1, router_1, router_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (new_contact_component_1_1) {
                new_contact_component_1 = new_contact_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <header>\n          <nav>\n            <a [routerLink]=\"['Contacts']\">Contacts</a>\n            <a [routerLink]=\"['NewContact']\">New Contact</a>\n          </nav>\n        </header>\n\n        <div class=\"main\">\n          <router-outlet></router-outlet>\n        </div>\n        \n    ",
                        directives: [contact_list_component_1.ContactListComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_2.RouteConfig([
                        { path: '/contacts', name: 'Contacts', component: contact_list_component_1.ContactListComponent, useAsDefault: true },
                        { path: '/newcontact', name: 'NewContact', component: new_contact_component_1.NewContactComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkJBO2dCQUFBO2dCQUVBLENBQUM7Z0JBekJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBRWxCLFFBQVEsRUFBRSxnVEFZVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyw2Q0FBb0IsRUFBRSwwQkFBaUIsQ0FBQztxQkFDeEQsQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNYLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUMxRixFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUM7cUJBQzFFLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NvbnRhY3RMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9jb250YWN0L2NvbnRhY3QtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7TmV3Q29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdC9uZXctY29udGFjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcblxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnQ29udGFjdHMnXVwiPkNvbnRhY3RzPC9hPlxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydOZXdDb250YWN0J11cIj5OZXcgQ29udGFjdDwvYT5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDb250YWN0TGlzdENvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5AUm91dGVDb25maWcoW1xuICB7cGF0aDogJy9jb250YWN0cycsIG5hbWU6ICdDb250YWN0cycsIGNvbXBvbmVudDogQ29udGFjdExpc3RDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gIHtwYXRoOiAnL25ld2NvbnRhY3QnLCBuYW1lOiAnTmV3Q29udGFjdCcsIGNvbXBvbmVudDogTmV3Q29udGFjdENvbXBvbmVudH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
