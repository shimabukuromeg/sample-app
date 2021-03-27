
alter table "public"."articles" drop constraint "articles_author_id_fkey",
          add constraint "articles_author_id_fkey"
          foreign key ("author_id")
          references "public"."users"
          ("id")
          on update restrict
          on delete restrict;

alter table "public"."articles" drop constraint "articles_author_id_fkey";

DROP TABLE "public"."articles";

DROP TABLE "public"."users";
