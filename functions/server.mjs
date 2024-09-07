/** @format */

import express from "express";

import ServerlessHttp from "serverless-http";

import bodyParser from "body-parser";

import A from "../db/maktab300/5A.mjs";

import B from "../db/maktab300/5B.mjs";

import D from "../db/maktab300/5D.mjs";

import E from "../db/maktab300/5E.mjs";

import G from "../db/maktab300/5G.mjs";

import T from "../db/maktab300/5T.mjs";

import Ж from "../db/maktab300/5Ж.mjs";

import И from "../db/maktab300/5И.mjs";

import К from "../db/maktab300/5К.mjs";

import Л from "../db/maktab300/5Л.mjs";

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(200);
});
``;

app.use((req, res, next) => {
  app
    .route("/5_?A(sinf)?")
    .get((req, res) => {
      res.json(A);
    })
    .post((req, res) => {
      res.send("Yangi sinf qushildi");
    })
    .put((req, res) => {
      res.send("Sinf yengilandi");
    })
    .delete((req, res) => {
      res.send("Sinf uchirildi");
    });

  app
    .route("/5_?B(sinf)?")
    .get((req, res) => {
      res.json(B);
    })
    .post((req, res) => {
      res.send("Yangi sinf qushildi");
    })
    .put((req, res) => {
      res.send("Sinf yengilandi");
    })
    .delete((req, res) => {
      res.send("Sinf uchirildi");
    });

  app
    .route("/5_?D(sinf)?")
    .get((req, res) => {
      res.json(D);
    })
    .post((req, res) => {
      res.send("Yangi sinf qushildi");
    })
    .put((req, res) => {
      res.send("Sinf yengilandi");
    })
    .delete((req, res) => {
      res.send("Sinf uchirildi");
    });

  app
    .route("/5_?E(sinf)?")
    .get((req, res) => {
      res.json(E);
    })
    .post((req, res) => {
      res.send("Yangi sinf qushildi");
    })
    .put((req, res) => {
      res.send("Sinf yengilandi");
    })
    .delete((req, res) => {
      res.send("Sinf uchirildi");
    });

  app
    .route("/5_?G(sinf)?")
    .get((req, res) => {
      res.json(G);
    })
    .post((req, res) => {
      res.send("Yangi sinf qushildi");
    })
    .put((req, res) => {
      res.send("Sinf yengilandi");
    })
    .delete((req, res) => {
      res.send("Sinf uchirildi");
    });

  app
    .route("/5_?T(sinf)?")
    .get((req, res) => {
      res.json(T);
    })
    .post((req, res) => {
      res.send("Yangi sinf qushildi");
    })
    .put((req, res) => {
      res.send("Sinf yengilandi");
    })
    .delete((req, res) => {
      res.send("Sinf uchirildi");
    });

  app
    .route("/5_?Ж(sinf)?")
    .get((req, res) => {
      res.json(Ж);
    })
    .post((req, res) => {
      res.send("Yangi sinf qushildi");
    })
    .put((req, res) => {
      res.send("Sinf yengilandi");
    })
    .delete((req, res) => {
      res.send("Sinf uchirildi");
    });

  app
    .route("/5_?И(sinf)?")
    .get((req, res) => {
      res.json(И);
    })
    .post((req, res) => {
      res.send("Yangi sinf qushildi");
    })
    .put((req, res) => {
      res.send("Sinf yengilandi");
    })
    .delete((req, res) => {
      res.send("Sinf uchirildi");
    });

  app
    .route("/5_?К(sinf)?")
    .get((req, res) => {
      res.json(К);
    })
    .post((req, res) => {
      res.send("Yangi sinf qushildi");
    })
    .put((req, res) => {
      res.send("Sinf yengilandi");
    })
    .delete((req, res) => {
      res.send("Sinf uchirildi");
    });

  app
    .route("/5_?Л(sinf)?")
    .get((req, res) => {
      res.json(Л);
    })
    .post((req, res) => {
      res.send("Yangi sinf qushildi");
    })
    .put((req, res) => {
      res.send("Sinf yengilandi");
    })
    .delete((req, res) => {
      res.send("Sinf uchirildi");
    });

  next();
});

export const handler2 = ServerlessHttp(app);

export const handler = async (event, context) => {
  const result = await handler2(event, context);
  return result;
};
