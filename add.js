var app = new function() {

  this.el = document.getElementById('ksiazki');

  this.ksiazki = ['Pan Tadeusz','Lalka'];

  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'book';

    if (data) {
      if (data > 1) {
        name = 'ksiazki';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };
  
  this.FetchAll = function() {
    var data = '';

    if (this.ksiazki.length > 0) {
      for (i = 0; i < this.ksiazki.length; i++) {
        data += '<tr>';
        data += '<td>' + this.ksiazki[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }

    this.Count(this.ksiazki.length);
    return this.el.innerHTML = data;
  };

  this.Add = function () {
    el = document.getElementById('add-name');
    // Get the value
    var book = el.value;

    if (book) {
      // Add the new value
      this.ksiazki.push(book.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    var el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.ksiazki[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;

    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var book = el.value;

      if (book) {
        // Edit value
        self.ksiazki.splice(item, 1, book.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };

  this.Delete = function (item) {
    // Delete the current row
    this.ksiazki.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
  
}

app.FetchAll();

function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}