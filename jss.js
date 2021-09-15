
    var x = 0;
    var array = Array();
    function addelement() {
    array[x]= document.getElementById("1").value;
//      alert("value is " + array[x]);
      x++;
    }

    function Max() {
      let marks = [...array];
      let max = marks[0];
      for (let i = 0; i < marks.length; i++) {
        if (max < marks[i])
          max = marks[i];
      }
      document.getElementsByid("max").innerHTML=Max;
    }
    function Min() {
      let marks = [...array];
      let min = marks[0];
      for (let i = 0; i < marks.length; i++) {
        if (min > marks[i])
          min = marks[i];
      }

      document.getElementsByid("min").innerHTML=Min;
    }

    function Total() {
      let marks = [...array];
      Number(marks);
      let total = 0;
      for (let i = 0; i < marks.length; i++) {
        total += parseInt(marks[i]);
      }
      document.getElementsByid("total").innerHTML=Total;
    }
    function Average() {
      let marks = [...array];
      let total = 0;
      for (let i = 0; i < marks.length; i++) {
        total += parseInt(marks[i]);
      }
      let avg = total / marks.length;
      document.getElementsByid('average').innerHTML=Average;
    }
    function display(){
        for(let i=0;i<array.length;i++){
          document.getElementsByid("display").innerHTML=display;
        }

        // alert ([...array])
    }
    