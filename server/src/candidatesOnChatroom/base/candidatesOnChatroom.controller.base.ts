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
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { PaginatedInterface } from "../../util/PaginatedInterface";
import { CandidatesOnChatroomService } from "../candidatesOnChatroom.service";
import { CandidatesOnChatroomCreateInput } from "./CandidatesOnChatroomCreateInput";
import { CandidatesOnChatroomWhereInput } from "./CandidatesOnChatroomWhereInput";
import { CandidatesOnChatroomWhereUniqueInput } from "./CandidatesOnChatroomWhereUniqueInput";
import { CandidatesOnChatroomFindManyArgs } from "./CandidatesOnChatroomFindManyArgs";
import { CandidatesOnChatroomUpdateInput } from "./CandidatesOnChatroomUpdateInput";
import { CandidatesOnChatroom } from "./CandidatesOnChatroom";
import { Post } from "../../post/base/Post";
import { getListCandidatesOnChatroomDto } from "./getListCandidatesOnChatroom.dto";
@swagger.ApiBearerAuth()
export class CandidatesOnChatroomControllerBase {
  constructor(
    protected readonly service: CandidatesOnChatroomService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "CandidatesOnChatroom",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: CandidatesOnChatroom })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: CandidatesOnChatroomCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<CandidatesOnChatroom> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "CandidatesOnChatroom",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"CandidatesOnChatroom"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        chatroom: data.chatroom
          ? {
              connect: data.chatroom,
            }
          : undefined,

        candidate: data.candidate
          ? {
              connect: data.candidate,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        chatroom: {
          select: {
            id: true,
          },
        },

        candidate: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "CandidatesOnChatroom",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: getListCandidatesOnChatroomDto })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => CandidatesOnChatroomFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PaginatedInterface<CandidatesOnChatroom>> {
    const args = plainToClass(CandidatesOnChatroomFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "CandidatesOnChatroom",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        chatroom: {
          select: {
            id: true,
          },
        },

        candidate: {
          select: {
            id: true,
          },
        },
      },
    });
    const result = results.paginatedResult.map((result: CandidatesOnChatroom) =>
      permission.filter(result)
    );
    return { paginatedResult: result, totalCount: results.totalCount };
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "CandidatesOnChatroom",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: CandidatesOnChatroom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: CandidatesOnChatroomWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<CandidatesOnChatroom | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "CandidatesOnChatroom",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        chatroom: {
          select: {
            id: true,
          },
        },

        candidate: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "CandidatesOnChatroom",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: CandidatesOnChatroom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: CandidatesOnChatroomWhereUniqueInput,
    @common.Body()
    data: CandidatesOnChatroomUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<CandidatesOnChatroom | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "CandidatesOnChatroom",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"CandidatesOnChatroom"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          chatroom: data.chatroom
            ? {
                connect: data.chatroom,
              }
            : undefined,

          candidate: data.candidate
            ? {
                connect: data.candidate,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,

          chatroom: {
            select: {
              id: true,
            },
          },

          candidate: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "CandidatesOnChatroom",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: CandidatesOnChatroom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: CandidatesOnChatroomWhereUniqueInput
  ): Promise<CandidatesOnChatroom | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,

          chatroom: {
            select: {
              id: true,
            },
          },

          candidate: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}