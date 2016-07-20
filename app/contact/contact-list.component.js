System.register(["angular2/core", "./contact.component", "./contact.service"], function(exports_1, context_1) {
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
    var core_1, contact_component_1, contact_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(_contactService) {
                    this._contactService = _contactService;
                    this.selectedContact = null;
                }
                ContactListComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                ContactListComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._contactService.getContacts().then(function (contacts) { return _this.contacts = contacts; });
                };
                ContactListComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: "contact-list",
                        template: "\n    <ul>\n          <li *ngFor=\"#contact of contacts\"\n          (click)=\"onSelect(contact)\"\n          [class.clicked]=\"selectedContact === contact\"\n          >\n          {{contact.firstname}}  {{contact.lastname}}\n          </li>\n        </ul>\n        <contact *ngIf=\"selectedContact !== null\" [contact]=\"selectedContact\"></contact>\n  ",
                        directives: [contact_component_1.ContactComponent],
                        providers: [contact_service_1.ContactService],
                        styleUrls: ["../src/css/app.css"]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvY29udGFjdC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCQTtnQkFLRSw4QkFBb0IsZUFBK0I7b0JBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFGNUMsb0JBQWUsR0FBRyxJQUFJLENBQUM7Z0JBSTlCLENBQUM7Z0JBRUQsdUNBQVEsR0FBUixVQUFTLE9BQU87b0JBQ2QsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsMENBQVcsR0FBWDtvQkFBQSxpQkFFQztvQkFEQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQW1CLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO2dCQUM3RixDQUFDO2dCQUVELHVDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNyQixDQUFDO2dCQXJDSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUscVdBVVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7d0JBQzlCLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7d0JBQzNCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO3FCQUNsQyxDQUFDOzt3Q0FBQTtnQkFzQkYsMkJBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHVEQW9CQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3QvY29udGFjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtDb250YWN0Q29tcG9uZW50fSBmcm9tIFwiLi9jb250YWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb250YWN0U2VydmljZX0gZnJvbSBcIi4vY29udGFjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbnRhY3R9IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCB7T25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY29udGFjdC1saXN0XCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHVsPlxuICAgICAgICAgIDxsaSAqbmdGb3I9XCIjY29udGFjdCBvZiBjb250YWN0c1wiXG4gICAgICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0KGNvbnRhY3QpXCJcbiAgICAgICAgICBbY2xhc3MuY2xpY2tlZF09XCJzZWxlY3RlZENvbnRhY3QgPT09IGNvbnRhY3RcIlxuICAgICAgICAgID5cbiAgICAgICAgICB7e2NvbnRhY3QuZmlyc3RuYW1lfX0gIHt7Y29udGFjdC5sYXN0bmFtZX19XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGNvbnRhY3QgKm5nSWY9XCJzZWxlY3RlZENvbnRhY3QgIT09IG51bGxcIiBbY29udGFjdF09XCJzZWxlY3RlZENvbnRhY3RcIj48L2NvbnRhY3Q+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDb250YWN0Q29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbQ29udGFjdFNlcnZpY2VdLFxuICBzdHlsZVVybHM6IFtcIi4uL3NyYy9jc3MvYXBwLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBwdWJsaWMgY29udGFjdHM6IENvbnRhY3RbXTtcblxuICBwdWJsaWMgc2VsZWN0ZWRDb250YWN0ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250YWN0U2VydmljZTogQ29udGFjdFNlcnZpY2UpIHtcblxuICB9XG5cbiAgb25TZWxlY3QoY29udGFjdCkge1xuICAgIHRoaXMuc2VsZWN0ZWRDb250YWN0ID0gY29udGFjdDtcbiAgfVxuXG4gIGdldENvbnRhY3RzKCkge1xuICAgIHRoaXMuX2NvbnRhY3RTZXJ2aWNlLmdldENvbnRhY3RzKCkudGhlbigoY29udGFjdHM6IENvbnRhY3RbXSkgPT4gdGhpcy5jb250YWN0cyA9IGNvbnRhY3RzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6YW55IHtcbiAgICB0aGlzLmdldENvbnRhY3RzKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
