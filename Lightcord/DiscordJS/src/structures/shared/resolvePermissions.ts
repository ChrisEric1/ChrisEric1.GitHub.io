import Permissions from '../../util/Permissions';
import Collection from '@discordjs/collection';
import Guild from '../Guild';
import { ChannelCreationOverwrites } from '../../util/util';
import { Snowflake } from '../..';
import PermissionOverwrites from '../PermissionOverwrites';

module.exports = function resolvePermissions(overwrites: ChannelCreationOverwrites[] | Collection<Snowflake, PermissionOverwrites>, guild:Guild) {
  if (overwrites instanceof Collection || overwrites instanceof Array) {
    //TODO: Remove ts-ignore
    // @ts-ignore
    overwrites = (Array.isArray(overwrites) ? overwrites : overwrites.array()).map(overwrite => {
      const role = this.client.resolver.resolveRole(guild, overwrite.id);
      if (role) {
        overwrite.id = role.id;
        overwrite.type = 'role';
      } else {
        overwrite.id = this.client.resolver.resolveUserID(overwrite.id);
        overwrite.type = 'member';
      }

      return {
        allow: Permissions.resolve(overwrite.allow || overwrite.allowed || 0),
        deny: Permissions.resolve(overwrite.deny || overwrite.denied || 0),
        type: overwrite.type,
        id: overwrite.id,
      };
    });
  }

  return overwrites;
};