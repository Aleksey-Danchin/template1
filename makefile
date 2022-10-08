# docker exec -i crm_db_1 pg_restore -U postgres -v -d crm < *.dump

up:
	docker compose -f dev.yml --env-file .env up

down:
	docker compose -f dev.yml --env-file .env down

build:
	docker compose -f dev.yml --env-file .env up --build

# prod_db_download:
# 	docker exec constcode_db pg_dump -a -U postgres -Fc crm > crm-$(date +%Y-%m-%d).dump

prod_up:
	docker compose -f prod.yml --env-file .prod.env up -d

prod_build:
	docker compose -f prod.yml --env-file .prod.env up -d

prod_down:
	docker compose -f prod.yml --env-file .prod.env down