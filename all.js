var quill = new Quill('#editor', {
  theme: 'snow',
  placeholder: '寫下產品描述',
  modules: {
    imageResize: {
      displaySize: true
    },
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['link', 'image'],
        ['clean']
      ],
      handlers: {
        image: imageHandler
      }
    }
  },
});

function imageHandler() {
  var range = this.quill.getSelection();
  var value = prompt('請貼上圖片連結');
  if (value) {
    this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
  }
}
