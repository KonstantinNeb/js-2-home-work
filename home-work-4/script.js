$.ajax({
  type: 'GET',
  url: 'https://jsonplaceholder.typicode.com/users',
  dataType: 'json'
})
  .done(function (data) {
    console.log(data);

    var body = document.getElementsByTagName('body')[0];

    data.forEach(function (item) {
      var child = document.createElement('li');
      child.innerText = item.name;
      child.addEventListener('click', function () {
        var phone = document.createElement('p');
        phone.innerText = item.phone;
        child.appendChild(phone);
        var email = document.createElement('p');
        email.innerText = item.email;
        child.appendChild(email);
        var city = document.createElement('p');
        city.innerText = item.address.city;
        child.appendChild(city);
      });
      body.appendChild(child);
    })
  });






