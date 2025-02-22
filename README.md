� Problem 1: Dynamic Component Loading 
� Task: Create a directive that dynamically loads a component inside a <div> when a button is clicked. 
Requirements: 
• Use ViewContainerRef and ComponentFactoryResolver to create the component dynamically. 
• The component should display a simple message. 
• Add a button to load the component. 


⚡ Problem 2: RxJS & Search Autocomplete 
� Task: Implement a real-time search bar that fetches user data using an API call. 
Requirements: 
• Use RxJS debounceTime to delay API calls. 
• Use switchMap to avoid multiple unnecessary requests. 
• Display search results in a dropdown. 


� Problem 3: Angular Signals (Angular 16+) 

� Task: Implement a counter using Angular Signals. 
Requirements: 
• Use signal() to store the count. 
• Provide buttons to increase and decrease the count. 
• Display the count on the screen. 


� Problem 4: Lazy Loading & Route Guards 
� Task: Implement Lazy Loaded Modules with Auth Guards. 
Requirements: 
• Create a feature module and load it lazily. 
• Use an AuthGuard to protect the route. 
• Redirect users if they are not logged in. 


� Problem 5: Reactive Forms Validation 
� Task: Build a User Registration Form with Angular Reactive Forms. 
Requirements: 
• Fields: name, email, password, confirm password. 
• Implement custom validation for password matching. 
• Show real-time validation errors. 


� Problem 6: Parent-Child Component Communication 
� Task: Implement a parent-child communication system using @Input() and @Output(). 
Requirements: 
• The parent component should pass a username to the child component using @Input(). 
• The child component should have a button that emits an event to the parent using @Output() and 
EventEmitter(). 


� Problem 7: Two-Way Data Binding without ngModel 
� Task: Create a custom two-way data binding for an input field without using ngModel. 
Requirements: 
• Use @Input() and @Output() to sync values between the parent and child components. 
• The value should update dynamically when the user types in the input field. 


� Problem 8: Fetch & Display API Data 
� Task: Fetch user data from a REST API and display it in a table. 
Requirements: 
• Use HttpClient to fetch data from https://jsonplaceholder.typicode.com/users. 
• Display the user details (name, email, phone) in a table. 
• Show a loading indicator while data is being fetched. 


� Problem 9: Implement a Custom Pipe 
� Task: Create a custom Angular Pipe that converts a string into Title Case (e.g., "angular pipes" → 
"Angular Pipes"). 
Requirements: 
• The pipe should be pure for better performance. 
• Use it inside a component to transform text dynamically. 

 ️ Problem 10: Create a Simple Angular Service 
� Task: Create a service to manage a to-do list using Angular Services & Dependency Injection. 
Requirements: 
• The service should have methods to add, delete, and get tasks. 
• Inject the service into a component and use it to display & modify tasks. 


� Problem 11: Infinite Scrolling using Intersection Observer 
� Task: Implement infinite scrolling using the Intersection Observer API. 
Requirements: 
• Load more data when the user scrolls to the bottom. 
• Use @ViewChild() to detect the last element in the list. 
• Fetch data dynamically from an API. 


� Problem 12: Implement a Simple NgRx Store 
� Task: Implement a basic NgRx store for managing a counter value. 
Requirements: 
• Define an NgRx store for the counter state. 
• Implement actions for incrementing and decrementing. 
• Use selectors to get the count in a component. 


� Problem 13: Real-time Chart using Angular & RxJS 
� Task: Implement a real-time chart using Chart.js and RxJS interval(). 
Requirements: 
• Use RxJS interval() to generate random data points. 
• Display the chart using Chart.js. 
• Update the chart every 2 seconds with new values. 


� Problem 14: Drag & Drop using Angular CDK 
� Task: Implement a drag-and-drop feature using the Angular CDK. 
Requirements: 
• Allow users to drag items from one list to another. 
• Use CdkDragDrop to update the list order dynamically. 
• Add animations for a better user experience. 


� Problem 15: Create a Route Guard for Admin Pages 
� Task: Protect admin routes using an AuthGuard. 
Requirements: 
• If a user is not an admin, redirect them to the home page. 
• Store user roles in a service and check permissions. 
• Implement the guard in the Angular router. 


� Problem 16: Lazy Loading a Feature Module 
� Task: Implement lazy loading for a feature module in an Angular app. 
Requirements: 
• Create a feature module (UserModule). 
• Define a component (UserProfileComponent) inside it. 
• Configure lazy loading in the Angular router using loadChildren(). 


� Problem 17: Unit Testing an Angular Service with Jasmine & Karma 
� Task: Write unit tests for an Angular service using Jasmine and Karma. 
Requirements: 
• Create a service (UserService) that fetches user data using HttpClient. 
• Write a test to check if the service is instantiated correctly. 
• Mock HttpClient to test API responses using HttpTestingController. 


� Problem 18: Implement Debounce for Search Input (RxJS) 
� Task: Implement debounce time for a search input field using RxJS operators. 
Requirements: 
• Use FormControl and valueChanges to listen to user input. 
• Apply debounceTime(500ms) to delay API calls. 
• Display search results dynamically. 


� Problem 19: Implement Form Validation using Reactive Forms 
� Task: Build a registration form using Angular Reactive Forms with validation. 
Requirements: 
• Use FormBuilder to create a form with fields: 
o Name (required) 
o Email (required, must be a valid email) 
o Password (minimum 6 characters) 
• Display validation error messages. 


� Problem 20: Create a Custom Structural Directive
📌 Task: Create a custom structural 
directive (*appIfAdmin) to show elements only for admin users. 
Requirements: 
• The directive should show or hide elements based on user role. 
• Use @Input() to accept a boolean condition (isAdmin). 
• Apply ng-template for structural directive behavior.