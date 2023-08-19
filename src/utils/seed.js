const Role = require('../models/role');

const seedRoles = async () => {
  try {
    const existingRoles = await Role.find();

    if (existingRoles.length === 0) {
      await Role.create({ roleName: 'user' });
      await Role.create({ roleName: 'admin' });
      console.log('Roles seeded successfully');
    } else {
      console.log('Roles already exist, skipping seeding');
    }
  } catch (error) {
    console.error('Error seeding roles:', error);
  }
};

module.exports = seedRoles;
