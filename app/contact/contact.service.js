System.register(["angular2/core", "./mock-contact"], function(exports_1, context_1) {
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
    var core_1, mock_contact_1;
    var ContactService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_contact_1_1) {
                mock_contact_1 = mock_contact_1_1;
            }],
        execute: function() {
            ContactService = (function () {
                function ContactService() {
                }
                ContactService.prototype.getContacts = function () {
                    return Promise.resolve(mock_contact_1.CONTACTS);
                };
                ContactService.prototype.insertContact = function (contact) {
                    Promise.resolve(mock_contact_1.CONTACTS).then(function (contacts) { return contacts.push(contact); });
                };
                ContactService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ContactService);
                return ContactService;
            }());
            exports_1("ContactService", ContactService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvY29udGFjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUE7Z0JBUUEsQ0FBQztnQkFQQyxvQ0FBVyxHQUFYO29CQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHVCQUFRLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFFRCxzQ0FBYSxHQUFiLFVBQWMsT0FBZ0I7b0JBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsdUJBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQW1CLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUE7Z0JBQ2pGLENBQUM7Z0JBUkg7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBU2IscUJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELDJDQVFDLENBQUEiLCJmaWxlIjoiY29udGFjdC9jb250YWN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0NPTlRBQ1RTfSBmcm9tIFwiLi9tb2NrLWNvbnRhY3RcIjtcbmltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29udGFjdFNlcnZpY2Uge1xuICBnZXRDb250YWN0cygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKENPTlRBQ1RTKTtcbiAgfVxuXG4gIGluc2VydENvbnRhY3QoY29udGFjdDogQ29udGFjdCkge1xuICAgIFByb21pc2UucmVzb2x2ZShDT05UQUNUUykudGhlbigoY29udGFjdHM6IENvbnRhY3RbXSkgPT4gY29udGFjdHMucHVzaChjb250YWN0KSlcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
