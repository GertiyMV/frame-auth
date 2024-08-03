const router = require("express").Router();
const { Order, User, Commit } = require("../../db/models");

router.get("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const commit = await Commit.findOne({
      where: { id: id },
    });

    res.json(commit);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const commit = await Order.findOne({
      where: { id: id },
      include: [
        {
          model: Commit,
          separate: true,
          order: [["id", "DESC"]],
          include: [
            {
              model: User,
            },
          ],
        },
      ],
    });

    res.json(commit);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

router.post("/:id/:user", async (req, res) => {
  try {
    const { id: task, user: manager } = req.params;
    const { text } = req.body;

    await Commit.create({ text, manager, task });

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    await Commit.update(
      { text: text },
      {
        where: {
          id: id,
        },
      }
    );

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Commit.destroy({
      where: {
        id: id,
      },
    });

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

// router.put("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await User.findByPk(id);
//     console.log(user.active);

//     if (user.active !== true) {
//       await User.update(
//         { active: true },
//         {
//           where: {
//             id: id,
//           },
//         }
//       );
//     } else {
//       await User.update(
//         { active: false },
//         {
//           where: {
//             id: id,
//           },
//         }
//       );
//     }

//     res.sendStatus(200);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(400);
//   }
// });

module.exports = router;
