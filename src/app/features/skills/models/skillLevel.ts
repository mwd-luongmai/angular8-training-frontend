import { JsonProperty, JsonObject } from 'json2typescript'

@JsonObject("SkillLevel")
export class SkillLevel {
    @JsonProperty("skillLevelName", String)
    skillLevelName: string = '';

    @JsonProperty("skillLevelDescription", String)
    skillLevelDescription: string = '';
}