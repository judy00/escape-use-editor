var quill = new Quill('#editor', {
  theme: 'snow',
  placeholder: '寫下產品描述',
  modules: {
    imageResize: {
      displaySize: true
    },
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['link', 'image'],
      ['clean']
    ]
  },
});
