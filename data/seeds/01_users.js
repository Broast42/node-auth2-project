
exports.seed = async function(knex) {
  await knex("users").insert([
    {username: "Admin", password: "nonhashedseededpass", department: "shipping"},
    {username: "Admin2", password: "nonhashedseededpass", department: "shipping"},
    {username: "Admin3", password: "nonhashedseededpass", department: "IT"},
    {username: "Admin4", password: "nonhashedseededpass", department: "IT"}
  ])
};
