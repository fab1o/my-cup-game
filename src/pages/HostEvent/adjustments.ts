import { ILevel } from '../../api/models/level';

type SetStringState = React.Dispatch<React.SetStateAction<string>>;
type SetBooleanState = React.Dispatch<React.SetStateAction<boolean>>;

class Adjustments {
  private setFormat: SetStringState;
  private setLand: SetStringState;
  private setPriceDisabled: SetBooleanState;

  constructor(
    setFormat: SetStringState,
    setLand: SetStringState,
    setPriceDisabled: SetBooleanState
  ) {
    this.setFormat = setFormat;
    this.setLand = setLand;
    this.setPriceDisabled = setPriceDisabled;
  }

  adjustFormatByLevel(level: ILevel, land: string) {
    switch (level.symbol) {
      case 'Rec':
        this.setFormat('6v6');
        break;
      case 'B':
        if (land !== 'Indoor') {
          this.setFormat('4v4');
        }
        break;
      case 'BB':
        if (land === 'Grass') {
          this.setFormat('4v4');
        }
        break;
      case 'A':
      case 'AA':
        if (land !== 'Indoor') {
          this.setFormat('2v2');
        }
        break;
    }
  }

  adjustFormatByLand(land: string) {
    switch (land) {
      case 'Indoor':
        this.setLand('6v6');
        break;
      case 'Grass':
      case 'Beach':
        break;
    }
  }

  adjustPrice(price: number) {
    if (price === 0) {
      this.setPriceDisabled(true);
    }
  }
}

export default Adjustments;
