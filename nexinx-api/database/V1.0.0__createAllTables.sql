-- Version: V1.0.0
CREATE TABLE IF NOT EXISTS public.organization
(
    id                         SERIAL        NOT NULL PRIMARY KEY,
    organization_name          VARCHAR(225)  NULL,
    organization_details       VARCHAR(225)  NULL,
    organization_address       VARCHAR(225)  NULL,
    organization_phone         VARCHAR(40)   NULL,
    organization_email         VARCHAR(100)  NULL,
    tax_id                     VARCHAR(100)  NULL,
    registration_id            VARCHAR(100)  NULL,
    created_at  TIMESTAMPTZ    NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ    NULL DEFAULT NOW()
);
CREATE INDEX index_organization_id ON organization (id);

CREATE TABLE IF NOT EXISTS public.branch
(
    id                  SERIAL         NOT NULL PRIMARY KEY,
    branch_name          VARCHAR(255)   NOT NULL,
    branch_code          VARCHAR(50)    NULL,
    branch_country       VARCHAR(100)   NULL,
    branch_region        VARCHAR(50)    NULL,
    branch_city          VARCHAR(50)    NULL,
    branch_phone         VARCHAR(100)   NULL,
    branch_email         VARCHAR(50)    NULL,
    epaper_count         VARCHAR(50)    NULL,
    station_count        VARCHAR(50)    NULL,
	organization_id      VARCHAR(100)   NULL,
    created_at           TIMESTAMPTZ    NULL DEFAULT NOW(),
    updated_at           TIMESTAMPTZ    NULL DEFAULT NOW()
);
CREATE INDEX index_branch_id ON branch (id);


CREATE TABLE IF NOT EXISTS public.area
(
    id                  SERIAL         NOT NULL PRIMARY KEY,
    area_name           VARCHAR(255)   NULL,
    area_description    VARCHAR(50)    NULL,
    area_code           VARCHAR(100)   NULL,
    linked_rack         VARCHAR(50)    NULL,
    epaper_count        VARCHAR(50)    NULL,
    getway_count        VARCHAR(50)    NULL,
    branch_id            VARCHAR(100)   NULL,
    created_at          TIMESTAMPTZ    NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ    NULL DEFAULT NOW()
);
CREATE INDEX index_area_id ON area (id);

CREATE TABLE IF NOT EXISTS public.rack
(
    id                  SERIAL         NOT NULL PRIMARY KEY,
    rack_name           VARCHAR(200)   NULL,
    rack_details        VARCHAR(255)   NULL,
    rack_number         VARCHAR(50)    NULL,
    rack_area           VARCHAR(50)    NULL,
    rack_image          VARCHAR(50)    NULL,
    epaper_count        VARCHAR(50)    NULL,
    station_count       VARCHAR(50)    NULL,
    branch_id           VARCHAR(50)    NULL,
    area_id             VARCHAR(50)    NULL,
    created_at          TIMESTAMPTZ    NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ    NULL DEFAULT NOW()
);
CREATE INDEX index_rack_id ON rack (id);

CREATE TABLE IF NOT EXISTS public.template
(
    id                      SERIAL         NOT NULL PRIMARY KEY,
    template_name           VARCHAR(255)   NULL,
    template_size           VARCHAR(225)   NULL,
    template_attribute      TEXT           NULL,
    template_raw            TEXT           NULL,
    linked_node             VARCHAR(100)   NULL,
    created_at              TIMESTAMPTZ    NULL DEFAULT NOW(),
    updated_at              TIMESTAMPTZ    NULL DEFAULT NOW()
);
CREATE INDEX index_template_id ON template (id);

CREATE TABLE IF NOT EXISTS public.node
(
    id                      SERIAL         NOT NULL PRIMARY KEY,
    node_attribute          TEXT           NULL,
    node_coordinate         TEXT           NULL,
    processing_status       VARCHAR(100)   NULL,
    template_name           VARCHAR(255)   NULL,
    linked_rack             VARCHAR(255)   NULL,
    epaper_count            VARCHAR(255)   NULL,
    branch_id               VARCHAR(50)    NULL,
    created_at              TIMESTAMPTZ    NULL DEFAULT NOW(),
    updated_at              TIMESTAMPTZ    NULL DEFAULT NOW()
);
CREATE INDEX index_node_id ON node (id);


CREATE TABLE IF NOT EXISTS public.node_meta
(
    id                      SERIAL         NOT NULL PRIMARY KEY,
    node_id                 VARCHAR(50)    NULL,
    node_image              TEXT           NULL,
    node_template           TEXT           NULL,
    epaper_id               VARCHAR(255)   NULL,
    created_at              TIMESTAMPTZ    NULL DEFAULT NOW(),
    updated_at              TIMESTAMPTZ    NULL DEFAULT NOW()
);
CREATE INDEX index_node_meta_id ON node_meta (id);

-- may task on at certain moment
CREATE TABLE IF NOT EXISTS public.inbox_task
(
    id                      SERIAL         NOT NULL PRIMARY KEY,
    node_id                 VARCHAR(50)    NULL,
    node_image              TEXT           NULL,
    epaper_id               VARCHAR(255)   NULL,
    gateway_id              VARCHAR(255)   NULL,
    processing_status       VARCHAR(100)   NULL,
    created_at              TIMESTAMPTZ    NULL DEFAULT NOW(),
    updated_at              TIMESTAMPTZ    NULL DEFAULT NOW()
);
CREATE INDEX index_inbox_task_id ON inbox_task (id);

-- pick only one task and lock the table until finish the task
CREATE TABLE IF NOT EXISTS public.outbox_task
(
    id                      SERIAL         NOT NULL PRIMARY KEY,
    node_id                 VARCHAR(50)    NULL,
    node_image              TEXT           NULL,
    epaper_id               VARCHAR(255)   NULL,
    processing_status       VARCHAR(100)   NULL,
    created_at              TIMESTAMPTZ    NULL DEFAULT NOW(),
    updated_at              TIMESTAMPTZ    NULL DEFAULT NOW()
);
CREATE INDEX index_outbox_task_id ON inbox_task (id);


CREATE TABLE IF NOT EXISTS public.epaper
(
    id                      SERIAL        NOT NULL PRIMARY KEY,
    identity_id             VARCHAR(225)  NULL,
    node_id                 VARCHAR(225)  NULL,
    station_id              VARCHAR(225)  NULL,
    branch_id               VARCHAR(225)  NULL,
    page_number             VARCHAR(50)   NULL,
    battery_status          VARCHAR(225)  NULL,
    process_status          VARCHAR(255)  NULL,
    network_status          VARCHAR(255)  NULL,
    signal_strength         VARCHAR(255)  NULL,
    is_removed              BOOLEAN       NULL,
    technology              VARCHAR(225)  NULL,
    removed_at              TIMESTAMPTZ   NULL,
    started_at              TIMESTAMPTZ   NULL,
    completed_at            TIMESTAMPTZ   NULL,
    created_at              TIMESTAMPTZ   NULL DEFAULT NOW(),
    updated_at              TIMESTAMPTZ   NULL DEFAULT NOW()
);
CREATE INDEX index_epaper_id ON epaper (id);

CREATE TABLE IF NOT EXISTS public.station
(
    id                      SERIAL        NOT NULL PRIMARY KEY,
    station_id              VARCHAR(225)  NULL,
    station_ip              VARCHAR(225)  NULL,
    station_port            VARCHAR(225)  NULL,
    is_Active               BOOLEAN       NULL,
    branch_id               VARCHAR(225)  NULL,
    branch_name             VARCHAR(225)  NULL,
    created_at              TIMESTAMPTZ   NULL DEFAULT NOW(),
    updated_at              TIMESTAMPTZ   NULL DEFAULT NOW()
);
CREATE INDEX index_station_id ON station (id);

CREATE TABLE IF NOT EXISTS public.users
(
    user_id                   SERIAL        NOT NULL PRIMARY KEY,
    user_fname               VARCHAR(150)  NULL,
    user_lname               VARCHAR(150)  NULL,
    user_email               VARCHAR(150)  NOT NULL,
    user_pass                VARCHAR(100)  NOT NULL,
    user_salt                VARCHAR(200)  NULL,
    user_mobile              VARCHAR(50)   NULL,
    user_roles               TEXT          NULL,
    is_Active                BOOLEAN       NULL,
    is_verified              BOOLEAN       NULL,
    valid_until              TIMESTAMPTZ   NULL,
    last_login               TIMESTAMPTZ   NULL,
    password_requested_at    TIMESTAMPTZ   NULL,
    created_at               TIMESTAMPTZ   NULL DEFAULT NOW(),
    updated_at               TIMESTAMPTZ   NULL DEFAULT NOW()
);
CREATE INDEX index_user_id ON users (user_id);


CREATE TABLE IF NOT EXISTS public.user_roles
(
    role_id                  SERIAL        NOT NULL PRIMARY KEY,
    role_name                VARCHAR(150)  NULL,
    role_description         VARCHAR(255)  NULL,
    created_at               TIMESTAMPTZ   NULL DEFAULT NOW(),
    updated_at               TIMESTAMPTZ   NULL DEFAULT NOW()
);
CREATE INDEX index_role_id ON user_roles (role_id);


CREATE TABLE IF NOT EXISTS public.user_active_roles
(
   user_id           SERIAL,
   role_id           SERIAL,
   PRIMARY KEY      (user_id, role_id),
   FOREIGN KEY      (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
   FOREIGN KEY      (role_id) REFERENCES user_roles(role_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS public.user_permissions
(
   permission_id                   SERIAL          NOT NULL PRIMARY KEY,
   permission_name                 VARCHAR(100)    NOT NULL UNIQUE,
   permission_description          VARCHAR(255)    NULL
);
CREATE INDEX index_user_permissions_id ON user_permissions (permission_id);


CREATE TABLE IF NOT EXISTS public.user_role_permissions
(
   role_id            SERIAL,
   permission_id      SERIAL,
   PRIMARY KEY        (role_id, permission_id),
   FOREIGN KEY        (role_id) REFERENCES user_roles(role_id) ON DELETE CASCADE,
   FOREIGN KEY        (permission_id) REFERENCES user_permissions(permission_id) ON DELETE CASCADE
);
