import React from 'react';
import './Forms.css';
import { Form, Radio, Select, Slider } from 'antd';
import { breeds } from '../dogBreeds';
import 'antd/dist/antd.css';



function Preferences() {

  const breedOptions: JSX.Element[] = [];
  for (let i = 0; i < breeds.length; i++) {
    breedOptions.push(<Select.Option key={breeds[i]}>{breeds[i]}</Select.Option>);
  }

  return (
    <div >
      <Form.Item label="Gender preference" name="genderPref" >
        <Radio.Group >
          <Radio.Button value="none">I dont Mind!</Radio.Button>
          <Radio.Button value="Female">Female</Radio.Button>
          <Radio.Button value="male">Male</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Age preference" name="agePref">
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Please select"
        >
          <Select.Option key="none">I dont mind!</Select.Option>
          <Select.Option key="0-1">0-1 year</Select.Option>
          <Select.Option key="2-5">2-5 years</Select.Option>
          <Select.Option key="6-9">6-9 years</Select.Option>
          <Select.Option key="10+">10+ years</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Size preference" name="sizePref">
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Please select"
        >
          <Select.Option key="small">Small</Select.Option>
          <Select.Option key="medium">Medium</Select.Option>
          <Select.Option key="large">Large</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Breed preference" name="breedPref">
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Please select"
        >
          {breedOptions}
        </Select>
      </Form.Item>

      <Form.Item label="Size of private outdoor space" name="outdoorSpace">
        <Radio.Group  >
          <Radio.Button value="none">None</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="medium">Medium</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Are there any other dogs in the household" name="dogs">
        <Radio.Group  >
          <Radio.Button value={true}>Yes</Radio.Button>
          <Radio.Button value={false}>No</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Are there any cats in the household" name="cats" >
        <Radio.Group >
          <Radio.Button value={true}>Yes</Radio.Button>
          <Radio.Button value={false}>No</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Are there any small animals in the household" name="smallAnimals">
        <Radio.Group  >
          <Radio.Button value={true}>Yes</Radio.Button>
          <Radio.Button value={false}>No</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Are there any children in the household" name="children">
        <Radio.Group  >
          <Radio.Button value="true">Yes (under 12)</Radio.Button>
          <Radio.Button value="12+">Yes (over 12)</Radio.Button>
          <Radio.Button value="false">No</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="How often will you be able to take the dog for exercise?" name="exercise">
        <Radio.Group  >
          <Radio.Button value="daily">Daily</Radio.Button>
          <Radio.Button value="weekly">Weekly</Radio.Button>
          <Radio.Button value="none">Less than weekly</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Willing to accomodate special needs e.g. behavioural or
medical?" name="specialNeeds">
        <Radio.Group  >
          <Radio.Button value={true}>Yes</Radio.Button>
          <Radio.Button value={false}>No</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="On an average day how long will the dog be left alone?" name="maxAlone">
        <Slider max={8} />
      </Form.Item>
    </div >
  )
}

export default Preferences;