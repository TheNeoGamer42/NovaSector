import type { BooleanLike } from 'tgui-core/react';

import type { PreferencesMenuData } from '../../types';
import type { LoadoutButton } from './ModifyPanel';

// Generic types
export type DmIconFile = string;
export type DmIconState = string;
export type FAIcon = string;
export type typePath = string;

type LoadoutInfoKey = string;
type LoadoutInfoValue = string;
// Info about a loadout item (key to info, such as color, reskin, layer, etc)
type LoadoutListInfo = Record<LoadoutInfoKey, LoadoutInfoValue> | [];
// Typepath to info about the item
export type LoadoutList = { loadouts: string[]; loadout: LoadoutListInfo }; // NOVA EDIT CHANGE - Multiple loadout presets - ORIGINAL: export type LoadoutList = Record<typePath, LoadoutListInfo>;

// Used for holding reskin information
export type ReskinOption = {
  name: string;
  tooltip: string;
  skin_icon_state: DmIconState; // The icon is the same as the item icon
};

export type LoadoutTooltip = {
  icon: string;
  tooltip: string;
};

// Actual item passed in from the loadout
export type LoadoutItem = {
  name: string;
  group: string;
  path: typePath;
  icon: DmIconFile | null;
  icon_state: DmIconState | null;
  buttons: LoadoutButton[];
  reskins: ReskinOption[] | null;
  information: LoadoutTooltip[];
  // NOVA EDIT ADDITION START - Expanded loadout framework
  ckey_whitelist: string[] | null;
  restricted_roles: string[] | null;
  blacklisted_roles: string[] | null;
  restricted_species: string[] | null;
  donator_only: BooleanLike;
  nova_stars_only: BooleanLike;
  erp_item: BooleanLike;
  // NOVA EDIT END
};

// Category of items in the loadout
export type LoadoutCategory = {
  name: string;
  category_icon: FAIcon | null;
  category_info: string | null;
  contents: LoadoutItem[];
  // NOVA EDIT ADDITION START
  erp_category: BooleanLike;
  // NOVA EDIT END
};

export type LoadoutManagerData = PreferencesMenuData & {
  job_clothes: BooleanLike;
};
