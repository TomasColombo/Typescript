fetch('https://fakestoreapi.com/products')
    .then(function (res) { return res.json(); })
    .then(function (products) {
    //prepare table HTML
    var tableHTML = '<thead><tr><th>ID</th> <th>Title</th> <th>Description</th> <th>Price</th></tr> </thead><tbody> '; //let es pq va a ir modificando su contenido a lo largo de la progrmacon
    //notemos que dejamos el tbody(table body) abierto
    // Loop thru all products to generate rows of the table 
    products.forEach(function (p) {
        tableHTML += "<tr> <td>".concat(p.id, "</td> <td>").concat(p.title, "</td> <td>").concat(p.description, "</td> <td>").concat(p.price, "</td></tr>");
    });
    // Close table body
    tableHTML += '</tbody>';
    // Grab table element to set its inner HTML
    // SETEAMOS EL INNER
    document.querySelector('tableElement').innerHTML = tableHTML;
    // Hide spinner
    var spinnerElement = document.querySelector('#spinnerContainer');
    spinnerElement.style.display = 'none';
});
