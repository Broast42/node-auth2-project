
exports.seed = async function(knex) {
  await knex("users").insert([
    {username: "Admin", password: "nonhashedseededpass", department: "shipping"}
  ])
};
