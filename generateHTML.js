// generateHTML.js

// const generateManagers = managers => {
//     if (managers.length === 0) {
//         return '';
//     } else {
//         return `
//         ${managers.map(({ name, id, email, roleInfo }) => {
//             return `
//             <div class="col-lg-3.5 card m-2" style="width: 18rem;">
//             <div class="card-header">
//                 <h3>${name}</h3>
//                 <h4><i class="fas fa-clipboard-list"></i> Manager</h4>
//             </div>
//             <div class="list">
//                 <ul class="list-group list-group-flush">
//                 <li class="list-group-item">ID: ${id}</li>
//                 <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
//                 <li class="list-group-item">Office Number: <a href="tel:${roleInfo}">${roleInfo}</a></li>
//                 </ul>
//             </div>
//             </div>
