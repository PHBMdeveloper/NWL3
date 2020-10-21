import { MigrationInterface, QueryRunner } from "typeorm";

export class createOrphanages1603300417405 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // REALIZAR ALTERAR
    // CRIAR TABELA, CRIAR CAMPO, DELETAR ALGUMA COISA
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // DESFAZER O QUE FOI FEITO UP
  }
}
