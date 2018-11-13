/**
 * Base Style interfaces
 * 
 * Only the interfaces for the base styles goes here
 * this enhances type-checking and auto completion on the codebase.
 * 
 */

import { IButtons } from './buttons';
import { ITypography } from './type';
import { IModal } from './modal_container';


export default interface BaseStylesInterface extends 
IButtons,
IModal,
ITypography
{}