const multer = require('multer');

const MAX_FILE_SIZE = 20 * 1024 * 1024;


const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image') || file.mimetype.startsWith('video') || file.mimetype === 'image/gif') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  },
  limits:{ fileSize :MAX_FILE_SIZE}, // in bytes
});

module.exports = upload;