var app = new Vue({
    el: '#appp',
   data: {
       comments:[],
       comment:"",
       commen:""
   },
   methods: {
       Addtext1: function() {
           this.comments.push({words: this.comment});
           this.comment="";
       },
       Addtext2: function() {
        
           this.comments.push({word: this.commen})
           this.commen="";
       }
   }
});