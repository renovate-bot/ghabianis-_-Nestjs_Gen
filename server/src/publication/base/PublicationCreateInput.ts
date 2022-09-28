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
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested , IsEnum } from "class-validator";
import { EventWhereUniqueInput } from "../../event/base/EventWhereUniqueInput";
import { Type } from "class-transformer";
import { PostWhereUniqueInput } from "../../post/base/PostWhereUniqueInput";
import { OfferWhereUniqueInput } from "../../offer/base/OfferWhereUniqueInput";
import { StoryWhereUniqueInput } from "../../story/base/StoryWhereUniqueInput";
import { VideoWhereUniqueInput } from "../../video/base/VideoWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { OfferCreateInput } from "src/offer/base/OfferCreateInput";
import { EnumTypePub } from "src/auth/registerEnumType";
import { CommunityWhereUniqueInput } from "src/community/base/CommunityWhereUniqueInput";
import { PublicationsOnCommunityCreateInput } from "src/publicationsOnCommunity/base/PublicationsOnCommunityCreateInput";
import { StoryCreateInput } from "src/story/base/StoryCreateInput";
@InputType()
class PublicationCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumTypePub,
  })
  @IsEnum(EnumTypePub)
  @IsOptional()
  @Field(() => EnumTypePub, {
    nullable: false,
  })
  type!: "story" | "event" |  "offer" | "video" | "post" ;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => EventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventWhereUniqueInput)
  @IsOptional()
  @Field(() => EventWhereUniqueInput, {
    nullable: true,
  })
  event?: EventWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PostWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PostWhereUniqueInput)
  @IsOptional()
  @Field(() => PostWhereUniqueInput, {
    nullable: true,
  })
  post?: PostWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => OfferCreateInput,
  })
  @ValidateNested()
  @Type(() => OfferCreateInput)
  @IsOptional()
  @Field(() => OfferCreateInput, {
    nullable: true,
  })
  offer?: OfferCreateInput | null;

  @ApiProperty({
    required: false,
    type: () => StoryCreateInput,
  })
  @ValidateNested()
  @Type(() => StoryCreateInput)
  @IsOptional()
  @Field(() => StoryCreateInput, {
    nullable: true,
  })
  story?: StoryCreateInput | null;

  @ApiProperty({
    required: false,
    type: () => VideoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VideoWhereUniqueInput)
  @IsOptional()
  @Field(() => VideoWhereUniqueInput, {
    nullable: true,
  })
  video?: VideoWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => [String],
  })
  @Type(() => Array)
  @IsOptional()
  @Field(() => [String], {
    nullable: true,
  })
  publicationsOnCommunities?: Array<string> | null; 
}
export { PublicationCreateInput };