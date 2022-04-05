Quill.register("modules/imageUploader", ImageUploader);

const quill = new Quill('#editor', {
  theme: 'snow',
  placeholder: '寫下產品描述',
  modules: {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['link', 'image'],
        ['clean']
      ],
      // handlers: {
      //   image: imageHandler
      // }
    },
    imageResize: {
      displaySize: true
    },
    imageUploader: {
      upload: file => {
        return new Promise((resolve, reject) => {
          console.log('file :>> ', file);
          setTimeout(() => {
            resolve(
              "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            );
          }, 1000);
        });
      }
    }
  },
});

// function imageHandler() {
//   var range = this.quill.getSelection();
//   var value = prompt('請貼上圖片連結');
//   if (value) {
//     this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
//   }
// }
