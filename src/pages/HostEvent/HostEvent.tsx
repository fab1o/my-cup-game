import { FormEvent, useState, useEffect } from 'react';

import {
  IonButton,
  IonContent,
  IonDatetime,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonTextarea,
  IonTitle,
  IonToolbar,
  IonToggle,
  IonNote,
  IonIcon,
  IonRange,
  IonGrid,
  IonRow,
  IonCol,
  SelectCustomEvent,
  SegmentCustomEvent,
  IonText,
  ToggleCustomEvent,
  IonListHeader,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  RangeCustomEvent,
} from '@ionic/react';

import { alertController, IonInputCustomEvent, InputInputEventDetail } from '@ionic/core';

import { locationOutline, locationSharp } from 'ionicons/icons';

import { usePreferencesDataProvider } from '../../PreferencesDataContext';
import * as preferenceKeys from '../../api/capacitor/preferenceKeys';

import { categories } from '../../api/models/categories';
import { ILevel, levels } from '../../api/models/level';

import Adjustments from './adjustments';

// import { getCountryByCity } from '../../api/geoLocation/getCountryByCity';
// import { ICountry, countries } from '../../api/geoLocation/countries';

// import debounce from './debunce';

import './HostEvent.css';

const PRICE_MAX = 20;
const MAX_CAPACITY = 60;

// setBusyDates = [
//   {
//     date: '2023-08-08',
//     textColor: 'var(--ion-color-purple-contrast)',
//     backgroundColor: 'var(--ion-color-purple)',
//   },
//   {
//     date: '2023-08-10',
//     textColor: 'var(--ion-color-purple-contrast)',
//     backgroundColor: 'var(--ion-color-purple)',
//   },
//   {
//     date: '2023-08-20',
//     textColor: 'var(--ion-color-purple-contrast)',
//     backgroundColor: 'var(--ion-color-purple)',
//   },
//   {
//     date: '2023-08-23',
//     textColor: 'var(--ion-color-purple-contrast)',
//     backgroundColor: 'var(--ion-color-purple)',
//   },
// ]

export const HostEvent: React.FC = () => {
  const { getPreference } = usePreferencesDataProvider();

  // const [busyDates, setBusyDates] = useState([]);
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [capacity, setCapacity] = useState<number>(22);
  // const [city, setCity] = useState('');
  // const [country, setCountry] = useState<ICountry>();
  const [price, setPrice] = useState<number>(0);

  const [capacityDisabled, setCapacityDisabled] = useState<boolean>(false);
  const [priceDisabled, setPriceDisabled] = useState<boolean>(true);

  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [isRsvp, setIsRsvp] = useState<boolean>(false);

  const [level, setLevel] = useState<ILevel | undefined>();
  const [category, setCategory] = useState<string>('');

  const [land, setLand] = useState<string>('Grass');
  const [format, setFormat] = useState<string>('6v6');
  const [gender, setGender] = useState<string>('coed');

  const adjustments = new Adjustments(setFormat, setLand, setPriceDisabled);

  useEffect(() => {
    async function loadSettings() {
      const levelSetting = await getPreference<string>(preferenceKeys.FAVE_LEVEL);

      if (levelSetting) {
        const level = levels.find((lev) => lev.symbol === levelSetting);
        if (level) {
          setLevel(level);
          adjustments.adjustFormatByLevel(level, land);
        }
      }

      const faveCategorySetting = await getPreference<string>(preferenceKeys.FAVE_SPORT);

      if (faveCategorySetting) {
        setCategory(faveCategorySetting);
      }
    }

    loadSettings();
  }, []);

  // function onInputAlphaNum(
  //   ev: Event,
  //   el: React.RefObject<HTMLIonInputElement>,
  //   setFunc: React.Dispatch<React.SetStateAction<string>>
  // ) {
  //   const value = (ev.target as HTMLIonInputElement).value as string;

  //   const filteredValue = value.replace(/[^a-zA-Z0-9\,\.\s]+/g, '');

  //   setFunc(filteredValue);

  //   const inputCmp = el.current;
  //   if (inputCmp !== null) {
  //     inputCmp.value = filteredValue;
  //   }
  // }

  // function getCountry(city: string) {
  //   const country = getCountryByCity(city);

  //   setCountry(country);
  // }

  // const debouncedSave = useCallback(
  //   debounce((city: string) => getCountry(city), 1000),
  //   []
  // );

  // function onCityInput(ev: IonInputCustomEvent<InputInputEventDetail>) {
  //   const value = ev.target.value as string;

  //   setCity(value);
  //   debouncedSave(value);
  // }

  async function processForm(event: FormEvent) {
    event.preventDefault();

    const alert = await alertController.create({
      header: 'Account Created',
      message: 'Created account',
      buttons: [
        {
          text: 'OK',
        },
      ],
    });

    alert.present();
  }

  function onFreeChanged(ev: ToggleCustomEvent) {
    setPriceDisabled(ev.detail.checked);
    if (ev.detail.checked) {
      setPrice(0);
    }
  }

  // function onCountryChange(ev: SelectCustomEvent) {
  //   setCountry(ev.detail.value);
  // }

  function onPrivateChanged(ev: ToggleCustomEvent) {
    setIsPrivate(ev.detail.checked);
    adjustments.adjustPrice(price);
  }

  function onRSVPChanged(ev: ToggleCustomEvent) {
    setIsRsvp(ev.detail.checked);
    adjustments.adjustPrice(price);
  }

  function onCategoryChanged(e: SelectCustomEvent) {
    setCategory(e.detail.value);
  }

  function onLevelChanged(e: SelectCustomEvent) {
    const level = e.detail.value;

    setLevel(level);
    adjustments.adjustFormatByLevel(level, land);
  }

  function onLandChange(e: SegmentCustomEvent) {
    const land = e.detail.value as string;

    setLand(land);
    adjustments.adjustFormatByLand(land);
  }

  function onFormatChange(e: SegmentCustomEvent) {
    const format = e.detail.value as string;

    setFormat(format);
  }

  function onGenderChange(e: SegmentCustomEvent) {
    const gender = e.detail.value as string;

    setGender(gender);
  }

  function onNameChanged(ev: Event) {
    const value = (ev.target as HTMLIonInputElement).value as string;

    setName(value);
  }

  function onDescriptionChanged(ev: Event) {
    const value = (ev.target as HTMLIonInputElement).value as string;

    setDescription(value);
  }

  function onAddressChanged(ev: Event) {
    const value = (ev.target as HTMLIonInputElement).value as string;

    setAddress(value);
  }

  function onCapacityChanged(ev: RangeCustomEvent) {
    setCapacity(ev.detail.value as number);
    adjustments.adjustPrice(price);
  }

  return (
    <IonPage id="host-event-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Host Event</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="hostEvent">
        <IonListHeader className="hostEvent ion-no-padding">Create Event</IonListHeader>
        <form onSubmit={processForm}>
          <IonList className="hostEvent">
            <IonInput
              type="text"
              aria-label="Event Title"
              placeholder="Event Title"
              clearOnEdit={true}
              className="hostEvent"
              color="purple"
              autoFocus={true}
              clearInput={true}
              value={name}
              onIonInput={onNameChanged}
              // onIonInput={(e) => onInputAlphaNum(e, nameEl, setName)}
              // ref={nameEl}
              required
            />

            <IonGrid className="ion-no-padding">
              <IonRow className="select-right ion-align-items-center">
                <IonCol className="select-left" size="4.5">
                  <IonSelect
                    title="Sport"
                    color="purple"
                    className="hostEvent"
                    placeholder="Sport"
                    interface="action-sheet"
                    aria-required="true"
                    onIonChange={onCategoryChanged}
                    value={category}
                    space-between="start"
                    labelPlacement="start"
                  >
                    {categories.map((category) => (
                      <IonSelectOption key={category} value={category}>
                        {category}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonCol>
                <IonCol className="select-right">
                  <IonSelect
                    color="purple"
                    title="Level"
                    className="hostEvent"
                    placeholder="Level"
                    interface="action-sheet"
                    aria-required="true"
                    onIonChange={onLevelChanged}
                    value={level}
                    space-between="end"
                    labelPlacement="end"
                  >
                    {levels.map((lev) => (
                      <IonSelectOption key={lev.key} value={lev}>
                        {lev.title}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonGrid>

            <IonGrid className="hostEvent ion-no-padding">
              <IonRow className="ion-justify-content-center ion-align-items-center toggles">
                <IonCol className="ion-no-padding-start">
                  <IonSegment value={land} onIonChange={onLandChange}>
                    <IonSegmentButton value="Grass">
                      <IonLabel>Grass</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Beach">
                      <IonLabel>Beach</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Indoor">
                      <IonLabel>Indoor</IonLabel>
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
              </IonRow>
            </IonGrid>

            <IonGrid className="hostEvent ion-no-padding">
              <IonRow className="ion-justify-content-center ion-align-items-center toggles">
                <IonCol className="ion-no-padding-start">
                  <IonSegment value={format} onIonChange={onFormatChange}>
                    <IonSegmentButton value="6v6">
                      <IonLabel>6v6</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="4v4">
                      <IonLabel>4v4</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="2v2">
                      <IonLabel>2v2</IonLabel>
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
              </IonRow>
            </IonGrid>

            <IonGrid className="hostEvent ion-no-padding ">
              <IonRow className="ion-justify-content-center ion-align-items-center toggles">
                <IonCol className="ion-no-padding-start">
                  <IonSegment value={gender} onIonChange={onGenderChange}>
                    <IonSegmentButton value="coed">
                      <IonLabel>co-ed</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="men">
                      <IonLabel>men</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="women">
                      <IonLabel>women</IonLabel>
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
              </IonRow>
            </IonGrid>

            <IonItem lines="none" className="hostEvent">
              <IonInput
                type="text"
                aria-hidden="true"
                placeholder="Address"
                color="purple"
                clearOnEdit={true}
                clearInput={true}
                value={address}
                onIonInput={onAddressChanged}
                // onIonInput={(e) => onInputAlphaNum(e, addressEl, setAddress)}
                // ref={addressEl}
                required
              />
              <IonIcon
                aria-hidden="true"
                slot="end"
                ios={locationOutline}
                md={locationSharp}
              />
            </IonItem>

            <IonTextarea
              aria-hidden="true"
              className="hostEvent"
              autoGrow={true}
              clearOnEdit={true}
              placeholder="Description"
              color="purple"
              value={description}
              onIonInput={onDescriptionChanged}
              // ref={descriptionEl}
            />

            {/* <IonGrid className="ion-no-padding">
              <IonRow className="ion-justify-content-start ion-align-items-center">
                <IonCol className="select-left" size="8">
                  <IonInput
                    type="text"
                    placeholder="City"
                    aria-hidden="true"
                    clearOnEdit={true}
                    className="hostEvent"
                    color="purple"
                    autoFocus={true}
                    clearInput={true}
                    value={city}
                    onIonInput={onCityInput}
                    required
                  />
                </IonCol>
                <IonCol className="select-right">
                  <IonSelect
                    title="Country"
                    aria-hidden="true"
                    color="purple"
                    className="hostEvent"
                    placeholder="Country"
                    interface="action-sheet"
                    onIonChange={onCountryChange}
                    value={country ? country || '' : ''}
                    selectedText={
                      country ? `${country.emoji} ${country.code}`.trim() : ''
                    }
                  >
                    {countries.map((country) => (
                      <IonSelectOption key={country.code} value={country}>
                        {`${country.emoji} ${country.name}`.trim()}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonGrid> */}

            <IonListHeader className="hostEvent ion-no-padding">
              Date and Time
            </IonListHeader>
            <IonDatetime
              mode="ios"
              className="hostEvent ion-no-padding"
              presentation="date-time"
              minuteValues="0,15,30,45"
              preferWheel={true}
              color="purple"
              locale="en-GB"
              // highlightedDates={busyDates}
            />

            <IonListHeader className="hostEvent ion-no-padding">
              Event settings
            </IonListHeader>

            <IonListHeader className="hostEvent ion-no-padding">$</IonListHeader>

            <IonGrid className="hostEvent ion-no-padding">
              <IonRow className="ion-justify-content-start ion-align-items-center hostEvent">
                <IonCol>Free</IonCol>
                <IonCol size="auto">Price</IonCol>
              </IonRow>
              <IonRow className="ion-align-items-center">
                <IonCol className="ion-no-padding-start" size="auto">
                  <IonToggle
                    className="ion-padding-end"
                    color="purple"
                    checked={priceDisabled}
                    onIonChange={onFreeChanged}
                    space-between="start"
                  />
                </IonCol>
                <IonCol className="ion-no-padding ion-no-margin">
                  <IonRange
                    disabled={priceDisabled}
                    className="hostEvent"
                    min={0}
                    max={PRICE_MAX}
                    ticks={false}
                    snaps={true}
                    value={priceDisabled ? 0 : price}
                    onIonChange={(e) => setPrice(e.detail.value as number)}
                    pin={true}
                    pinFormatter={(value: number) => `$${value}`}
                    space-between="end"
                  />
                </IonCol>
              </IonRow>
            </IonGrid>

            <IonListHeader className="hostEvent ion-no-padding">Capacity</IonListHeader>
            <IonGrid className="hostEvent ion-no-padding">
              <IonRow className="ion-justify-content-start ion-align-items-center hostEvent">
                <IonCol>No Cap</IonCol>
                <IonCol size="auto">With Cap</IonCol>
              </IonRow>
              <IonRow className="ion-align-items-center">
                <IonCol className="ion-no-padding-start" size="auto">
                  <IonToggle
                    className="ion-padding-end"
                    color="purple"
                    checked={priceDisabled ? capacityDisabled : priceDisabled}
                    onIonChange={() => setCapacityDisabled(!capacityDisabled)}
                    space-between="start"
                  />
                </IonCol>
                <IonCol className="ion-no-padding ion-no-margin">
                  <IonRange
                    disabled={priceDisabled && capacityDisabled}
                    className="hostEvent"
                    min={4}
                    max={MAX_CAPACITY}
                    ticks={false}
                    snaps={true}
                    value={capacity}
                    onIonChange={onCapacityChanged}
                    pin={true}
                    space-between="end"
                  />
                </IonCol>
              </IonRow>
            </IonGrid>

            <IonListHeader className="hostEvent ion-no-padding">Promote</IonListHeader>
            <IonGrid className="hostEvent ion-no-padding ">
              <IonRow className="ion-justify-content-start ion-align-items-center hostEvent">
                <IonCol>Private</IonCol>
                <IonCol size="auto">RSVP</IonCol>
              </IonRow>
              <IonRow className="ion-justify-content-center ion-align-items-center toggles">
                <IonCol className="ion-no-padding-start">
                  <IonToggle
                    id="private-toggle"
                    className="ion-padding-end"
                    color="purple"
                    checked={isPrivate}
                    onIonChange={onPrivateChanged}
                    space-between="start"
                  />
                  {/* <IonPopover
                    trigger="private-toggle"
                    side="right"
                    alignment="end"
                    size="auto"
                  >
                    <IonContent class="ion-padding">
                      Keeps event hidden from public
                    </IonContent>
                  </IonPopover> */}
                </IonCol>
                <IonCol className="ion-no-padding ion-no-margin" size="auto">
                  <IonToggle
                    color="purple"
                    checked={isRsvp}
                    onIonChange={onRSVPChanged}
                    justify="end"
                  />
                </IonCol>
              </IonRow>
              {/* <IonRow className="ion-justify-content-center ion-margin-bottom">
                 <IonText hidden={price === 0} className="hostEvent">
                  Subscribe to lift restrictions on paid events
                </IonText>
              </IonRow> */}
            </IonGrid>
          </IonList>

          <div className="ion-padding">
            <IonButton expand="block" type="submit" color="purple">
              Create account
            </IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};
