BEGIN;
-- INSERT LES DONNEES DANS L'ORDRE TABLE PAR TABLE SINON tout est CASSER

INSERT INTO "role" ("label")
VALUES 
('User'),
('Admin');

INSERT INTO "user" ("email","password","pseudo","image_url","user_status","lastname","firstname","phone","city","experience","role_id") VALUES 
('toto@gmail.com','toto_password','toto_pseudo','toto_image','d','toto_lastname','toto_firstname','0101011','Paris','5 ans de React',1),
('dev_react@gmail.com','toto_password','React-if','home/zozio.png','bd','Neymar','Jean','012345678','Marseille',' débutant React',1),
('guesswhosback@gmail.com','olaola','2Back','desktop/immg/levoila','d','MauvaiseNode','PaixHacheP','0825512512','Vaux-En-Velin','2 ans de SQL + NodeJs',1),
('good_designer@gmail.com','10sign','Léonard Dév Vinci','desktop/img/selfie','nd','Dupont','Michel','0305040609','Grenoble','Habile en design , 3 ans en entreprise + 1 an en freelance',1),
('needhelpproject@gmail.com','oskour','proposeur_de_projet','toto_image','d','Hancock','Elvira','0685777460','Auxerre','Chef de mon entreprise depuis plus de 10 ans',1),
('newsneakers@gmail.com','airmax90','sneakers addict','desktop/img/nikeair90','d','Neutron','Jimmy','074558899','Sarcelles','Auto-entrepreneur depuis 10 ans ',1);

INSERT INTO "project" ("name","is_available","description","need_of_the_project","beginning_date","icon","owner_id")
VALUES ('Devolution',true,'projet visant à aider les jeunes développeurs ainsi que les porteurs de projets ayant besoin de développeurs ou autre pour leur site','sur ce projet il faudra 1 back , 2 front de préférence connaissant React',NOW(), 'wwww.liendelicone.fr OU chemin en local',1),
('Le Coeur Sur La Main',true,'Fondateur de mon association qui consiste a venir en aide aux plus démunis (dons de vêtements, nourriture, aide scolaire pour enfants , organisations de sorties en groupe...), je souhaiterais créer un site internet afin de toucher un maximum de personnes pour notre cause , tout en permettant a de jeunes développeurs de gagner en expérience.','aucune connaissance techniques à ce sujet, je compte sur votre savoir-faire et vos conseils pour notre petit projet , contactez-moi pour en savoir plus',NOW(), 'wwww.liendelicone.fr OU chemin en local',1),
('Un Toi pour tous ',true,'Association aidant les sans-abris a pouvoir trouver un logement au plus vite, difficile de recenser les logements disponibles, les cas "réglés" ainsi que les nouveaux cas... Nous pensions donc a numériser notre inventaire et nous comptons sur Dévolution pour nous aider.','toutes nos données sont sur papier... nous aimerions avoir des développeurs capable de créer un site recensant toutes demandes et toutes offres',NOW(),'cheminlocal/logoAssos',2);

INSERT INTO "skill" ("label")
VALUES('React'),
('NodeJs'),
('Angular'),
('ThreeJS'),
('PostgreSQL'),
('MongoDB'),
('EJS'),
('Python'),
('Symfony'),
('CSS'),
('HTML'),
('Strapi'),
('Ruby');

INSERT INTO "user_participate_projects" ("user_id","project_id")
VALUES (1,1),
(2,2);

INSERT INTO "user_has_skills" ("user_id","skill_id")
VALUES (1,1),
(2,2);


COMMIT;


