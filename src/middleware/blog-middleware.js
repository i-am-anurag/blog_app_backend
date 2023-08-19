const User = require('../models/user');

const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).populate('roleId');
        if (!user) {
          return res.status(401).json({ message: 'User not found' });
        }
        if (user.roleId.roleName !== 'admin') {
          return res.status(403).json({ message: 'Access denied' });
        }
        next();
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: 'Internal server in is admin error' });
    }
};



module.exports = {
    isAdmin,
}