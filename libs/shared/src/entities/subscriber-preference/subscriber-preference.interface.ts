import { ChannelTypeEnum, PreferenceOverrideSourceEnum } from '../../types';
import { INotificationTrigger } from '../notification-template';

export interface IPreferenceChannels {
  email?: boolean;
  sms?: boolean;
  in_app?: boolean;
  chat?: boolean;
  push?: boolean;
}

export interface IPreferenceOverride {
  channel: ChannelTypeEnum;
  source: PreferenceOverrideSourceEnum;
}

export interface ISubscriberPreferenceResponse {
  template: ITemplateConfiguration;
  preference: {
    enabled: boolean;
    channels: IPreferenceChannels;
    overrides: IPreferenceOverride[];
  };
}

export interface ITemplateConfiguration {
  _id: string;
  name: string;
  critical: boolean;
  tags?: string[];
  triggers: INotificationTrigger[];
}

export enum PreferenceLevelEnum {
  GLOBAL = 'global',
  TEMPLATE = 'template',
}
