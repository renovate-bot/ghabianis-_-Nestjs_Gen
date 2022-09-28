/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, UsersOnEntreprise, Entreprise, User } from "@prisma/client";
import { PaginatedInterface } from "../../util/PaginatedInterface";
import { DbService } from "src/dbService/db.service";

export class UsersOnEntrepriseServiceBase {
  constructor(protected readonly prisma: DbService) {}

  async count<T extends Prisma.UsersOnEntrepriseFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersOnEntrepriseFindManyArgs>
  ): Promise<number> {
    return this.prisma.usersOnEntreprise.count(args);
  }

  async findMany<T extends Prisma.UsersOnEntrepriseFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersOnEntrepriseFindManyArgs>
  ): Promise<PaginatedInterface<UsersOnEntreprise>> {
    const [data, totalCount] = await Promise.all([
      this.prisma.usersOnEntreprise.findMany(args),
      this.prisma.usersOnEntreprise.count(),
    ]);

    return { paginatedResult: data, totalCount };
  }
  async findOne<T extends Prisma.UsersOnEntrepriseFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersOnEntrepriseFindUniqueArgs>
  ): Promise<UsersOnEntreprise | null> {
    return this.prisma.usersOnEntreprise.findUnique(args);
  }
  async create<T extends Prisma.UsersOnEntrepriseCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersOnEntrepriseCreateArgs>
  ): Promise<UsersOnEntreprise> {
    return this.prisma.usersOnEntreprise.create<T>(args);
  }
  async update<T extends Prisma.UsersOnEntrepriseUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersOnEntrepriseUpdateArgs>
  ): Promise<UsersOnEntreprise> {
    return this.prisma.usersOnEntreprise.update<T>(args);
  }
  async delete<T extends Prisma.UsersOnEntrepriseDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersOnEntrepriseDeleteArgs>
  ): Promise<UsersOnEntreprise> {
    return this.prisma.usersOnEntreprise.delete(args);
  }

  async getEntreprise(parentId: string): Promise<Entreprise | null> {
    return this.prisma.usersOnEntreprise
      .findUnique({
        where: { id: parentId },
      })
      .entreprise();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.usersOnEntreprise
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}