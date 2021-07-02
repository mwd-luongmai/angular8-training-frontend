import { JsonProperty, JsonObject } from 'json2typescript'
import { SkillLevel } from "./skillLevel";

@JsonObject("Skill")
export class Skill {
    @JsonProperty("_id", String)
    _id: string = '';

    @JsonProperty("skillName", String)
    skillName: string = '';

    @JsonProperty("skillSchemaName", String)
    skillSchemaName: string = '';

    @JsonProperty("skillStatus", Boolean)
    skillStatus: boolean = true;

    @JsonProperty("skillLevels", [SkillLevel])
    skillLevels: SkillLevel[] = undefined;
}
